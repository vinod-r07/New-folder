import React from "react";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";

const Comment = ({ comment }) => {
  return (
    <div className="pl-5 ml-5 border-l-black my-2">
      <div className="flex items-center border-l-2">
        <div className="m-3">
          <img
            className="h-8 rounded-full"
            alt="user"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          />
        </div>
        <div>
          <p className="font-semibold text-xs">{comment.name}</p>
          <p className="text-sm">{comment.message}</p>
        </div>
      </div>

      <div className="mt-2">
        <button className="rounded-full  py-1 px-2 hover:bg-gray-200">
          <img
            alt="likeBtn"
            className="inline-block  text-center"
            src={likeIcon}
          />
          15
        </button>
        <button className=" px-4 rounded-full  py-1 hover:bg-gray-200">
          <img alt="dislikeBtn" className="inline-block" src={disLikeIcon} />
        </button>
        <span> reply</span>
      </div>
    </div>
  );
};

export default Comment;
