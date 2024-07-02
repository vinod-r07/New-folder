import React from 'react'
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return comments?.map((comment, index) => (
        <div key={index}>
            <Comment  comment={comment} />
            <div className='pl-5 ml-5 border-l-black'>
                <CommentsList comments={comment?.replies} />
            </div>
        </div>
    ))
}

export default CommentsList;