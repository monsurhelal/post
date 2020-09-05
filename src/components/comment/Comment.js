import React from 'react';
import './comment.css';


const Comment = (props) => {

    const {name,email,body} = props.comment;
    return (
        <div className="commentAria">
            <h2><strong>Name:</strong>{name}</h2>
            <p className="email"><strong>Email:</strong>{email}</p>
            <p className="comment"><strong>Comment:</strong>{body}</p>
        </div>
    );
};

export default Comment;