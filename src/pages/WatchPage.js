import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_RECOMENDED_VIDEO_LIST_API,
  CHANNEL_INFO,
  YOUTUBE_VIDEO_DATA,
  valueConverter,
} from "../utils/constants";
import Head from "../components/Head";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import moreIcon from "../assets/more.svg";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";
import LiveChat from "../components/LIveChats";
import { useSelector } from "react-redux";


const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
  

  let menuOpen= useSelector( (store) => store.app.isMenuOpen)

  let key = searchParams.get("v");

  const [descOpen, SetDescOpen] = useState(false);

  const [suggest, setSuggest] = useState([]);
  const [video, setVideo] = useState([]);
  const [channel, setChannel] = useState([]);
  

  const fetchSuggests = async () => {
    const data = await fetch(YOUTUBE_RECOMENDED_VIDEO_LIST_API + key);
    const res = await data.json();
    console.log("responce of suggest");
    console.log(res);
    setSuggest(res.items);
  };

  const getChannelInfo = async (channelId) => {
    console.log("enter in channel");
    const data = await fetch(CHANNEL_INFO + channelId);
    const res = await data.json();
    console.log("responce of channel info");
    console.log(res);
    setChannel(res.items[0]);
  };

  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DATA + key);
    const res = await data.json();
    console.log("responce of video info");
    console.log(res.items[0]);
    setVideo(res.items[0]);
  };

  useEffect(() => {
    getVideoInfo();
  }, []);

  useEffect(() => {
    fetchSuggests();

    if (video && video.snippet) {
      const channelId = video.snippet.channelId;
      getChannelInfo(channelId);
    }
  }, [video]);

  const url = `https://www.youtube.com/embed/${key}?autoplay=1&origin=http://example.com`;
  const subs = valueConverter(channel?.statistics?.subscriberCount);
  const view = valueConverter(video?.statistics?.viewCount);
  const like = valueConverter(video?.statistics?.likeCount);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(Date.parse(video?.snippet?.publishedAt));
  const day = date.getDate();
  const month = months[date.getMonth() - 1];
  const year = date.getFullYear();

  const desc = video?.snippet?.description.substr(0, 200);
  const channelName= channel ? channel?.snippet?.title.substr(0,12)+`...`: ""


  return (
    <div className="relative overflow-x-hidden w-[100vw]">
      <Head />
      
      
      <div className="flex relative z-10 m-4 w-[100vw] flex-wrap items-start">
        <div className="w-0">
        {
          menuOpen &&
          <Sidebar />
        }
        </div>
        <div className="z-10 gap-4 w-full flex flex-wrap">
        <div className="lg:w-[60vw] w-[100vw] h-auto gap-4 z-10 ">
          <div className="w-full h-[45vh] sm:h-[45vh] md:h-[55vh] lg:h-[70vh]">
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src={url}
            frameBorder="0"
            name="youtube embed"
            allow="autoplay; encrypted-media"
            title={video?.snippet?.title}
          ></iframe>
          </div>
          <h3 className="text-lg font-medium "> {video?.snippet?.title} </h3>

          <div className="flex items-center justify-between my-3 gap-3 w-[670px] ">
            <img
              className="rounded-full w-16"
              src={channel ? channel?.snippet?.thumbnails?.default?.url : ""}
              alt="channel"
            />

            <div className="flex flex-col ">
              <h1>{ channelName}</h1>
              <h1 className=""> {subs} subscribers </h1>
            </div>
            <button className="bg-gray-100 rounded-full   p-2  border-gray-300 hover:bg-gray-200">
      
              Subscribe
            </button>

            <span className="flex">
              
              <button className="bg-gray-100 flex rounded-l-full p-2 hover:bg-gray-200">
                <img
                  alt="likeBtn"
                  className="inline-block text-center"
                  src={likeIcon}
                />
                {like}
              </button>
              <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 py-1 hover:bg-gray-200">
                <img
                  alt="dislikeBtn"
                  className="inline-block"
                  src={disLikeIcon}
                />
              </button>
            </span>
            <button className="bg-gray-100 rounded-full  p-2 ml-2 hover:bg-gray-200">
              <img alt="shareBtn" className="inline-block" src={shareIcon} />
              Share
            </button>
            <button className="bg-gray-100 rounded-full  w-10 p-2  h-10 ml-2 hover:bg-gray-200">
              <img alt="moreBtn" className="inline-block" src={moreIcon} />
            </button>
          </div>

          <div className="flex justify-evenly ">
           
          </div>

          <div className="bg-gray-200 my-4 p-1">
            <span>

              { !descOpen && view} {descOpen && video?.statistics?.viewCount}  Views {month} {day}, {year}
            </span>

            <p
              onClick={() => {
                SetDescOpen(true);
              }}
              className="my-4 hover:cursor-pointer "
            >
              {!descOpen && desc + ` ... more`}
            </p>
            <p>{descOpen && video?.snippet?.description} </p>

            {descOpen && (
              <span
                onClick={() => {
                  SetDescOpen(false);
                }}
                className="hover:cursor-pointer my-4"
              >
                
                Show less
              </span>
            )}
          </div>

          <div>
            <h1 className="font-medium">
              
              {video?.statistics?.commentCount} Comments{" "}
            </h1>
            <Comments />
          </div>
        </div>

        <div className="lg:w-[30vw] w-[100vw] ">
          < LiveChat className="w-full sm:hidden hidden md:block lg:block" />
          {suggest.map((vid) => (
            <Link
              key={vid?.id}
              to={"/watch?v=" + vid?.id}
              onClick={() => window.scroll(0, 0)}
            >
              <div className=" my-2  flex">
                <img
                  className="rounded-md w-[168px] h-[94px] "
                  alt="thumbnail"
                  src={vid?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-2 w-full">
                  <li className="font-medium py-1 text-[14px] ">
                    {vid?.snippet?.title}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    {vid?.snippet?.channelTitle}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    
                    {vid?.statistics?.videoCount}
                    {(
                      Math.abs(
                        new Date(vid?.snippet?.publishedAt) - new Date()
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(0)}
                     days ago
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
        </div>

      </div>

    

    </div>
  );
};

export default WatchPage;



    // const url= `https://www.youtube.com/embed/${key}?autoplay=1&origin=http://example.com`;

 
   
