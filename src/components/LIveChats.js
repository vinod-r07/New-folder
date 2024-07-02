import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { MdSend } from "react-icons/md";


const LiveChat = () => {

    const dispatch= useDispatch();
    //const [name, setName]= useState("");
    const [values, setValues]= useState("");

    const indianNames = [
        "Mohan", "Rahul", "Sita", "Priya", "Akash", "Anjali", "Rohit", "Sonia",
        "Vikram", "Pooja", "Ajay", "Rani", "Rajesh", "Seema", "Sunil", "Geeta",
        "Amit", "Kavita", "Suresh", "Neha", "Vinod", "Sunita", "Manoj", "Manisha",
        "Ankit", "Aisha", "Abhishek", "Kirti", "Gaurav", "Renu", "Nitesh", "Monika",
        "Pavan", "Riya", "Saurabh", "Payal", "Ashish", "Swati", "Deepak", "Ankita",
        "Vikas", "Priyanka", "Harish", "Sakshi", "Hemant", "Ruchi", "Yash", "Naina",
        "Karan", "Deepika", "Arjun", "Anusha", "Varun", "Nikita", "Nikhil", "Shweta",
        "Aditya", "Sonali", "Manish", "Sonal", "Rishabh", "Aditi", "Krish", "Komal",
        "Sidharth", "Simran", "Abhay", "Gauri", "Sameer", "Rani", "Ashutosh", "Rani", // Added Rani again for 100 names
        "Mihir", "Kiara", "Yug", "Alia", "Dev", "Disha","Mohan", "Rahul", "Sita", "Priya", "Akash", "Anjali", "Rohit", "Sonia",
  "Vikram", "Pooja", "Rajesh", "Seema", "Sunil", "Geeta",
  "Amit", "Kavita", "Suresh", "Neha", "Vinod", "Sunita", "Manoj", "Manisha",
  "Ankit", "Aisha", "Abhishek", "Kirti", "Gaurav", "Renu", "Nitesh", "Monika",
  "Pavan", "Riya", "Saurabh", "Payal", "Ashish", "Swati", "Deepak", "Ankita",
  "Vikas", "Priyanka", "Harish", "Sakshi", "Hemant", "Ruchi", "Yash", "Naina",
  "Karan", "Deepika", "Arjun", "Anusha", "Varun", "Nikita", "Nikhil", "Shweta",
  "Aditya", "Sonali", "Manish", "Sonal", "Rishabh", "Aditi", "Krish", "Komal",
  "Sidharth", "Simran", "Abhay", "Gauri", "Sameer", "Ashutosh", // Added Rani again for 100 names
  "Mihir", "Kiara", "Yug", "Alia", "Dev", 
      ];
    
      const chatMessage= useSelector( (store) => store.chat.message);

       let name= "";
        
    function generate() {
        name= indianNames[Math.floor( Math.random() * indianNames.length )];
       
    };
      
    useEffect( () => {
        const i= setInterval( () => {
            generate();
          
            dispatch(addMessage({
            name: `${name}`,
            message: `this is ${name}'s comment`}))
        }, 5000)
       
        return () => clearInterval(i);
    }, [])

    return(
        <div className="mx-2 border border-black w-full hidden lg:block">
             <h3 className="shadow px-2 font-semibold text-lg w-full">Live Chat</h3>
       <div className=" h-[40vw] flex flex-col-reverse border  w-full overflow-y-scroll">
       
        {
            chatMessage.map( (chat,index) => {
                return (
                    <div key={index} className="flex items-start gap-2 m-1">
                        <FaRegUserCircle className="text-2xl" />
                        <p className="text-lg font-semibold">{chat.name}</p>
                        <p className="text-lg">{chat.message}</p>
                        </div>
                )
            })
        }

       </div>

       <form className="flex items-center gap-4" onSubmit={ (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "You",
            message: values
            }));
            setValues("");
       }}>
       <input className="m-1 px-2 py-1 w-[70%]" value={values} onChange={ (e) => setValues(e.target.value)} type="text" placeholder="Add comment" />
       <button> <MdSend className="text-2xl"  /></button>
       </form>
       </div>
    )
};

export default LiveChat;