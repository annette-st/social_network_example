import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <img src={props.mainPhoto}/>
        </div>
    );
}


export default ProfileInfo;