import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/profile_images/1122995987730112513/sPturtT9.jpg'/>
            <text>{props.content}</text>
            <div>Likes: {props.likesCount}</div>
        </div>
    );
}

export default Post;