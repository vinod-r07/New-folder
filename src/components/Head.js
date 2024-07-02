import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import youTube from "../assets/youtube.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  toggleMenu } from "../utils/appSlices";




const Head = () => {

  const navigate= useNavigate();

  const [searchQuery, setSearchQuery]= useState("");

  const isUserLoggedIn = useSelector((store) => store.app.isUserLoggedIn);
  const dispatch = useDispatch();

  const togglleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchHandler= async () => {

    if( searchQuery !== "" )
    {
      let query=searchQuery.replaceAll(' ', '+');
        navigate(`/results/search_query/${query}`);
    }
  }



  return (
    <div className="flex justify-evenly sticky items-center h-20 shadow px-10 gap-4">
      <IoMdMenu
        className="text-3xl cursor-pointer"
        onClick={() => togglleMenuHandler()}
      />

      <div className="flex cursor-pointer">
       <NavLink to="/" >
        <img
          src={youTube}
          alt="Youtube logo"
          width={100}
        />
        </NavLink>
        <sup>IN</sup>

      </div>
      
        <div className=" flex w-[60%] mx-auto h-10"  > 
          <input
            type="text"
            className=" pl-4 py-2 border border-slate-600 rounded-l-full w-10/12 search-box"
            placeholder="Search" value={searchQuery} onChange={ (e) => setSearchQuery(e.target.value) } onKeyDown={ (event) => {  if (event.key === "Enter") 
              searchHandler();
            } }

          />
          <span className="bg-slate-400 w-1/12 border rounded-r-full h-full py-2 px-2 cursor-pointer" onClick={ () => searchHandler()}> 🔍</span>
        </div>
      

      <div className="hidden lg:block">
      {isUserLoggedIn && (
        <div className="flex gap-2 ">
          <span> create</span>
          <span> Notification</span>
          <span> Account</span>
        </div>
      )}

      {!isUserLoggedIn && (
        <div className=" mt-4 border border-blue-600 p-2 rounded-full text-blue-600 cursor-pointer " >
          <span className="">  : Sign in</span>
        </div>
      )}
      </div>


    </div>
  );
};

export default Head;
