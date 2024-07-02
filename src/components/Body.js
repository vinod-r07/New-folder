import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";


const Body= () => {

    function scrollHandler() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log("scrolling....")
    }

    return(
       <div className="flex gap-5 z-0 w-[100vw] " onScroll={ scrollHandler}> 
      
             <Sidebar className="w-2/12" />
           
             <VideoContainer className="w-10/12" />
       </div>
    )
}

export default Body