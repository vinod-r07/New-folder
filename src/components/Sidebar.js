import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import shorts from "../assets/shorts.svg";
import subscription from "../assets/subscriptions.svg";
import history from "../assets/history.svg";
import you from "../assets/yourVideos.svg";
import Trending from "../assets/trending.svg";
import shopping  from "../assets/shopping.svg";
import music from "../assets/music.svg"
import  movies from "../assets/movies.svg";
import news from "../assets/news.svg";
import live  from "../assets/live.svg";
import gaming from "../assets/gaming.svg";
import fashion from "../assets/fashionAndBeauty.svg";
import sports from "../assets/sports.svg";
import premium from "../assets/yt-premium.svg";
import ytMusic from "../assets/music.svg";
import kids from "../assets/yt-kids.svg";
import settings from "../assets/settings.svg";
import report from "../assets/reportHistory.svg";
import help from "../assets/help.svg";
import feedback from "../assets/sendFeedback.svg";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const openList= [
    {
      title: "Home",
      page: "/",
      image: home,
      id: 1
    },
    {
      title: "Shorts",
      page: "/shorts",
      image: shorts,
      id: 2,
      },
      {
        title: "Subscription",
        page: "/subscription",
        image: subscription,
        id: 3,
      },
      {
        title: "You",
        page: "/you",
        image: you,
        id: 4,
      },
      {
        title: "History",
        page: "/history",
        image: history,
        id: 5,
      }
  ]

  const closeList1= [
    {
      title: "Home",
      page: "/",
      image: home,
      id: 11,
    },
    {
      title: "Shorts",
      page: "/shorts",
      image: shorts,
      id: 12,
      },
      {
        title: "Subscription",
        page: "/subscription",
        image: subscription,
        id: 13,
      },
  ]

  const closeList2= [
    {
      title: "You",
      page: "/you",
      image: you,
      id: 21,
    },
    {
      title: "History",
      page: "/history",
      image: history,
       id: 22,
    }
  ]

  const closeList3= [
    {
      title: "Trending",
      page: "/trending",
      image: Trending,
       id: 31,
    },
    {
      title: "Shopping",
      page: "/",
      image: shopping,
       id: 32,
    },
    {
      title: "Music",
      page: "/music",
      image: music,
      id: 33,
    },
    {
      title: "Movies",
      page: "/movies",
      image: movies,
      id: 34
    },
    {
      title: "Live",
      page: "/live",
      image: live,
      id: 35,
    },
    {
      title: "Gaming",
      page: "/",
      image: gaming,
      id: 36,
    },
    {
      title: "News",
      page: "/news",
      image: news,
      id: 37,
    },
    {
      title: "Sports",
      page: "/",
      image: sports,
      id: 38,
    },
    {
      title: "Fashion & Beauty",
      page: "/",
      image: fashion,
      id: 39
    }

  ]

  const closeList4= [
      {
        title: "Youtube Premium",
        page: "/",
        image: premium,
        id: 41
      },
      {
        title: "Youtube Kids",
        page: "/",
        image: kids,
        id: 42
      },
      {
        title: "Youtube Music",
        page: "/",
        image: ytMusic,
        id: 43
      },
     
  ]

  const closeList5= [
    {
      title: "Setting",
      image: settings,
      id: 51,
    },
    {
      title: "Report History",
      image: report,
      id: 52,
    },
    {
      title: "Help",
      image: help,
      id: 53
    },
    {
      title: "Send Feedback",
      image: feedback,
      id: 54
    }
  ]

    return (
      <div className="relative">
      <ul className="flex flex-col pl-2 w-[12vw] sm:w-[9vw] md:w-[9vw] lg:w-[14vw] bg-[#fff]">
        {
          openList.map( (item) => {
            return (
              <NavLink to="/" > <li key={item.id} className="flex w-full gap-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item.image} alt={item.title} /> {item.title} </li> </NavLink>
                
              );

          })
        }
      </ul>

   
     { isMenuOpen && 
       <div className="flex flex-col z-20 w-[150px] sm:w-[170px] md:w-[200px] lg:w-[200px] bg-[#fff] absolute top-0  overflow-x-scroll scrollbar-hidden -moz-scrollbar-none left-0 transition duration-1000 ease">
       
          <ul className="border-b-2 p-2 ">
            {
              closeList1.map( (item) => {
                return(
                  <NavLink to="/" > <li key={item.id} className="flex gap-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item.image} alt={item.title} /> {item.title} </li> </NavLink>
                )
              })
            }
          </ul>
        

          <ul className="border-b-2  p-2">
            {
              closeList2.map( (item) => {
                return(
                  <NavLink to="/" > <li key={item.id} className="flex gap-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item.image} alt={item.title} /> {item.title} </li> </NavLink>
                )
              })
            }
          </ul>
         
      
        <div className="mb-4  p-2">
          <span className="mb-2  p-2" >
           
            Sign in to like videos, comment, and subscribe.
          </span>
          <span className="mt-4 border border-blue-600 p-2 rounded-full text-blue-600 cursor-pointer">
            : Sign in
          </span>
        
        </div>
        <div className="bg-gray-400 h-[1px] "> </div>
        

        <div className="border-b-2  p-2">
          <h3 className="font-semibold">Explore</h3>
           <ul >
            {
              closeList3.map( (item) => {
                return(
                  <NavLink to="/" >
                    <li key={item.id} className="flex gap-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item.image} alt={item.title} />
                     {item.title} </li>
                  </NavLink>
                )
              } )
            }
           </ul>
        </div>
      

        <div className="border-b-2  p-2">
          <h3 className="font-semibold">More from Youtube</h3>
          <ul>
              {
                closeList4.map( (item) => {
                  return(
                    <NavLink >
                      <li key={item.id} className="flex gap-2 my-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item.image} alt={item.title} />
                      {item.title} </li>
                    
                    </NavLink>
                )}
              )}
          </ul>
        </div>
       

       <ul className="border-b-2  p-2">
        {
            closeList5.map( (item) => {
              return(
                <NavLink >
                  <li key={item.id} className="flex gap-2 my-2 p-2 rounded-md hover:bg-gray-200"> <img className="" src={item
                  .image} alt={item.title} />
                  {item.title} </li>
                  </NavLink>
              )
            } )
          }
        </ul>
  
    

        <div className="flex flex-wrap p-2">
          <span> About</span>
          <span>Copyright</span>
          <span>Press</span>
          <span>Contact us</span>
          <span>Advertise</span>
          <span>Creators</span>
          <span>Developers</span>

          <p> @ 2024 GOOGLE LLC</p>
        </div>
      </div>
}
        </div>
        )
};

export default Sidebar;
