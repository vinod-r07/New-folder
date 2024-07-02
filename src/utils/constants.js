
//const GOOGLE_API_KEY= "AIzaSyA67hkNcQnEOGN2Aq4KYbx_5gT7wzyNkxs";
const GOOGLE_API_KEY= "AIzaSyBCOljLuKQjfl5r-sT9n7xadMNJdBwV8NE";

//HOME PAGE
export const YOUTUBE_VIDEOS_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}&chart=mostPopular`

// SEARCH API
export const SEARCH_API = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&ds=yt&cp=2&gs_id=7&xhr=t&xssi=t&q="

//RECCOMENDED videos
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}&chart=mostPopular&videoCategryId=`;

// YOUTUBE VIDEO DATA =  VIEWS
export const YOUTUBE_VIDEO_DATA= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`

// YOUTUBE CHANNEL DATA
export const CHANNEL_INFO= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`



export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export function valueConverter(number) {
    // Check if the number is greater than or equal to 1 billion.
    if (number >= 1000000000) {
      // Convert the number to billions and return the result.
      return (number / 1000000000).toFixed(2) + "B";
    }
  
    // Check if the number is greater than or equal to 1 million.
    else if (number >= 1000000) {
      // Convert the number to millions and return the result.
      return (number / 1000000).toFixed(2) + "M";
    }
  
    // Check if the number is greater than or equal to 1000.
    else if (number >= 1000) {
      // Convert the number to kilo and return the result.
      return (number / 1000).toFixed(2) + "K";
    }
  
    // Otherwise, return the number as-is.
    else {
      return number;
    }
  }

  export const LIVE_CHAT_COUNT = 21;