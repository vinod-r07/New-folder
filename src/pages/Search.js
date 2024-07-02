import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import { useLocation } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../utils/constants";
import { SearchVideoCard } from "../components/VideoCards";
import Sidebar from "../components/Sidebar"


const Search = ( ) => {

    const queries= useLocation().pathname;
    console.log(queries);
    const myArray = queries.split("/");
    console.log(myArray[3]);


    const [result, setResults]= useState([]);

    const fetchVidoes= async() => {
        try {
            const res= await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API+ myArray[3]);
          const val= await res.json();
  
          console.log(val.items);
          setResults(val.items);
       
          } catch (error) {
            console.log("Error aa gya");
          }
    }

    useEffect( () => {
        fetchVidoes();
    }, [myArray[3]] )


    if( result.length > 0 )
    return(
        <div>
            <Head />

            <div className="flex gap-4">
                <Sidebar />
            <div className="flex flex-col gap-4">
                    {
                        result.map( (card,index) => {
                            return < SearchVideoCard key={index} card={card} />
                        })
                    }
            </div>
            </div>
        </div>
    )
};

export default Search;