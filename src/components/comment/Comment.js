import React from 'react';
import './comment.css';


const Comment = (props) => {

    // console.log(props.comment)
    const {name,email,body} = props.comment;
     const {medium} = props.image[0].results.picture;
    console.log(props.image)
    return (
        <div className="commentAria">
            <img src={medium} alt=""/>
            <h2>{name}</h2>
            <p className="email"><strong>email:</strong>{email}</p>
            <p className="comment">{body}</p>
        </div>
    );
};

export default Comment;