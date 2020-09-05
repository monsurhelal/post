import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Comment from '../comment/Comment';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
});

const PostDetail = () => {
    const { postDetaials } = useParams();

     const [postDetail,setPostDetail] = useState([]);
     const [comment,setComment] = useState([]);
     const [image,setImage] = useState([]);
     
     useEffect(() =>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${postDetaials}`)
        .then(res => res.json())
        .then(data => setPostDetail(data));

     },[]);

     useEffect(() => {

      fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postDetaials}`)
      .then(res => res.json())
      .then(data => setComment(data));
     },[]);

     useEffect(() => {

        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => setImage(data))
     },[])

     const {id,title,body} = postDetail;
     const classes = useStyles();

    return (
        <div className="postAria">
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
            </Card>


            {

              comment.map(comment => <Comment image={image} comment={comment}></Comment> )


            }


            
    </div>
    );
};

export default PostDetail;