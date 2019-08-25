import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo mainPhoto={props.state.mainPhoto}/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPost={props.updateNewPost}/>
        </div>

    );

};

export default Profile;