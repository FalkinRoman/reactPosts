import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({comments}) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <h3>Комментарии ({comments.length})</h3>
            {comments.map(com =>
                <CommentItem key={com.id} com={com}/>
            )
            }
        </div>
    );
};

export default CommentList;