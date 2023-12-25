import React from 'react';

const PostIdItem = (props) => {
    return (
        <div className='post'>
            <div className="postId__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <hr/>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>

    );
};

export default PostIdItem;