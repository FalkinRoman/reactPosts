import React from 'react';

const CommentItem = (props) => {
    return (
        <div className='commentItem' key={props.com.id}>
            <h4><span>email:</span> {props.com.email}</h4>
            <p><span>Comment:</span> {props.com.body}</p>
        </div>
    );
};

export default CommentItem;