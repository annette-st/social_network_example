import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let posts = props.posts
        .map( (post) => <Post id={post.id} content={post.content} likesCount={post.likes}/>);

    let newPostElem = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPost(text);
    };

    return (
            <div>
                New post
                <div className={s.newPost}>
                    <div>
                        <textarea onChange={ onPostChange } ref={newPostElem} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add</button>
                    </div>
                </div>
                <div className={s.posts}>
                    My posts:
                    { posts }
                </div>

            </div>

    );
}

export default MyPosts;