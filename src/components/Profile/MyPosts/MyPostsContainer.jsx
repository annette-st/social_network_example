import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";

// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState();
//
//                     let onAddPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
//
//                     let onPostChange = (text) => {
//                         store.dispatch(updatePostActionCreator(text));
//                     };
//
//                     return (
//                         <MyPosts addPost={onAddPost} onPostChange={onPostChange} posts={state.posts} newPostText={state.newPostText}/>
//                     );
//                 }
//             }
//         </StoreContext.Consumer>
//         );
//
//
// };
let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updatePostActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;