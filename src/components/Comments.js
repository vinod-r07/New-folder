import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const Comments = () =>{

        const comments= [
            {
               name: " @anjaliofficialyt2m634",
time: "1 year ago",
message: `42 Million Views Completed \n
 #2 ON TRENDING FOR MUSIC \n

 
 Record Machine Pawan Singh`,

replies: [
{
name: "@Deepak_Gupta724",
time: "1 year ago",
message: `  1 no pe bhi Pawan bhaiya Ka devi geet hai`,
replies: [
{
 name : "@sumitpoddar9203",
time: "1 year ago",
message: `   love you pavan bahia`,

},

{
name: "@DineshKumar-mn5ts",
time: "1 year ago",
message: ` @Deepak_Gupta724  Sabke baap ka song Aaj aa rha h`
}
]}, ,
{


name: "@Deepak_Gupta724",
time: "1 year ago",
message: " @DineshKumar-mn5ts  bolne Ka tameej Nahi hai"
} ]
            },
{
name : "@Deepak_Gupta724",
time: "1 year ago (edited)",
message: ` @DineshKumar-mn5ts  yadi 1 par khesari ji Ka song aayega to bhojpuri k liye Acha hai na,
Back to back bhojpuri hi trending mein rahega ,
Samjha Karo yarr`,
}
,
            
{

name: "@pravinsingh8746",
time: "1 year ago",
message: `Kuch log jinki okat kuch nhi hai 
Wo khali log jat pat ki politics krte hai
Bhojpuri no. 1`
}
,
{

name : "@chandusachin8206",
time: "1 year ago",
message: `Very nice song `
}

,{
name: "@chandusachin8206",
time: "1 year ago",
message: "Nice song ",
replies: [

{
name : "@Rohitverma-ii3xe",
time: "1 year ago",
message: "Our share karo bhai abhi tak 10 crore nhi hua",

}

]

}

,
            {
              name: "@Yaduvanshi_lavalesh_4149",
              time: "2 years ago",
              message: "जो अभी अभी इस गीत को सुन रहा है भगवान करे उनके माता-पिता की लम्बी आयु हो....️️️",
              replies: [
                {
                  name: "@RavindraKumar-xo6pv",
                  time: "1 year ago",
                  message: "Thank you",
                },
                
              ]
            },
            {
              
          name: '@Rahul_Raaina',
          time: " 2 months ago",
          message: "Kon kon 2024 me sun raha hai",
          replies: [
        {
        name: "@mithunbihari8107",
        time: "1 month ago",
         message: "Hi",
        },
        {
        name: "@Chandankumar-ft2ox",
        time: "1 month ago",
        message: "Main 2028 me sun raha hu",
        replies: [
        {
          name: "@AdityaRaj-wv7sf",
          time: "3 weeks ago",
          message: "मैं ",
          replies: [
            {
              name: "@RANJEETKUMAR-ri2gg",
              time: "5 days ago",
              message: "Purana songs best songs",
            }
          ]
        }
        ]
        }
        
        
          ]
            }
          ]
           
        
return (
    <div> 
           <CommentsList comments={comments} />

    </div>
)
}

export default Comments;