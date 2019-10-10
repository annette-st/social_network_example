import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
        </div>
    );
}


export default ProfileInfo;