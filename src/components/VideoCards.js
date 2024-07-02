import React from "react";
import { Link } from "react-router-dom";

export const VideoCard= ({card}) => {
    
    let title= card.snippet.title;
    if( title.length > 42 )
    title= title.substr(0,40)+ ` ...`;


    return(
       <Link to={`/watch?v=${card.id}`} onClick={() => window.scroll(0, 0)} >
        <div className="w-64 shadow-md"  >
           
           <img className="rounded-lg" alt="thumbnails" src={card.snippet.thumbnails.medium.url} />
           
           <div className="p-2"> <span> {title} </span>
           <h3 className="text-gray-600"> {card.snippet.channelTitle} </h3>
            </div>

      </div>
       </Link>
    )
};

export const SearchVideoCard= ( { card }) => {

   if( card.id.kind === "youtube#channel")
   {

      const desc= card.snippet.description.substr(0,60)+"...";
      

      return(
         <Link to="/channel/videos" onClick={() => window.scroll(0, 0)} >
            <div className="lg:h-48 md:h-40 sm:h-30 h-20 mb-4 flex justify-around ">
               {/* Bannner */}
            <div > 
               <img src={card.snippet.thumbnails.default.url} alt="channel Banner" className="border rounded-full h-40 my-7"/>
            </div>

            {/* Channel Name and desc */}
            <div className="p-4">
               <p>   {card.channelTitle} </p>
               <p > {card.snippet.title} </p>
               <span className="text-gray-600"> {desc} </span>
            </div>
         </div>
         <hr />
         </Link >
      )
   }
   else 
   {
      const desc= card.snippet.description.substr(0,100)+"...";
      
      return (
      <Link to={`/watch?v=${card.id.videoId}`} className="w-full h-56 flex gap-4" onClick={() => window.scroll(0, 0)}>
         
         <div className="2/3 h-full object-fill ">
            <img src={card.snippet.thumbnails.medium.url} alt="Video Thumbnail" className="h-56 w-full border rounded-md object-fill aspect-auto" />
            
         </div>

         <div className="w-1/3"> 
            <p className="text-lg"> {card.snippet.title} </p>
            <span className="text-gray-600"> {desc} </span>
         
         </div>

      </Link >
   )
}
}

// {
//    "kind": "youtube#searchListResponse",
//    "etag": "T2x32UlzztHj1iwvpFO7NnkMs1c",
//    "nextPageToken": "CBkQAA",
//    "regionCode": "IN",
//    "pageInfo": {
//      "totalResults": 97099,
//      "resultsPerPage": 25
//    },
//    "items": [
//      {
//        "kind": "youtube#searchResult",
//        "etag": "S07KbSG0WFaCyoVtzm6JrcOmdRc",
//        "id": {
//          "kind": "youtube#channel",
//          "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw"
//        },
//        "snippet": {
//          "publishedAt": "2012-07-17T20:45:36Z",
//          "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
//          "title": "Netflix",
//          "description": "DO NOT ANSWER Get Netflix's latest trailers and updates here! Netflix is the world's leading streaming entertainment service with ...",
//          "thumbnails": {
//            "default": {
//              "url": "https://yt3.ggpht.com/ytc/AIdro_m_yDK6DVU4BhuMEIhLF7CvihoscyEO1f2o4u2YGbVhWuQ=s88-c-k-c0xffffffff-no-rj-mo"
//            },
//            "medium": {
//              "url": "https://yt3.ggpht.com/ytc/AIdro_m_yDK6DVU4BhuMEIhLF7CvihoscyEO1f2o4u2YGbVhWuQ=s240-c-k-c0xffffffff-no-rj-mo"
//            },
//            "high": {
//              "url": "https://yt3.ggpht.com/ytc/AIdro_m_yDK6DVU4BhuMEIhLF7CvihoscyEO1f2o4u2YGbVhWuQ=s800-c-k-c0xffffffff-no-rj-mo"
//            }
//          },
//          "channelTitle": "Netflix",
//          "liveBroadcastContent": "none",
//          "publishTime": "2012-07-17T20:45:36Z"
//        }
//      },
//      {
//        "kind": "youtube#searchResult",
//        "etag": "SRmD1ICjCubBAybsKrzhO4YyVzQ",
//        "id": {
//          "kind": "youtube#video",
//          "videoId": "C65iqOSCZOY"
//        },
//        "snippet": {
//          "publishedAt": "2020-04-17T13:00:00Z",
//          "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
//          "title": "Explained | World&#39;s Water Crisis | FULL EPISODE | Netflix",
//          "description": "In partnership with Vox Media Studios and Vox, this enlightening explainer series will take viewers deep inside a wide range of ...",
//          "thumbnails": {
//            "default": {
//              "url": "https://i.ytimg.com/vi/C65iqOSCZOY/default.jpg",
//              "width": 120,
//              "height": 90
//            },
//            "medium": {
//              "url": "https://i.ytimg.com/vi/C65iqOSCZOY/mqdefault.jpg",
//              "width": 320,
//              "height": 180
//            },
//            "high": {
//              "url": "https://i.ytimg.com/vi/C65iqOSCZOY/hqdefault.jpg",
//              "width": 480,
//              "height": 360
//            }
//          },
//          "channelTitle": "Netflix",
//          "liveBroadcastContent": "none",
//          "publishTime": "2020-04-17T13:00:00Z"
//        }
//      }



