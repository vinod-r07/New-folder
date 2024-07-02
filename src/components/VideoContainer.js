import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { VideoCard } from "./VideoCards";



const VideoContainer = () => {

  const[ videos, setVideos]= useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, [page]);

  const getVideos = async () => {
    try {
      const data = await fetch(`${YOUTUBE_VIDEOS_API}&${YOUTUBE_VIDEOS_API}`);
      const json = await data.json();

      setVideos((prev) => [...prev, ...json.items]);
      console.log(json)
    } catch (e) {
      console.error(e);
    }
  };


  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  function isObjectEmpty(obj) { 
        for (const i in obj) return false;   
           return true;
         }

  if( !isObjectEmpty(videos) )
  { return (
    <div className="m-4 justify-evenly flex flex-wrap gap-2">
     {
       videos.map ( (card, index) => {
        return  <VideoCard key={index} card={card} /> ;
      })
  }
    </div>
  
)
}
else
return <div>empty</div>
};

export default VideoContainer;
