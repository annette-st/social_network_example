const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState =  {
    posts: [
        {id:1, content: 'hello everyone!', likes: 10},
        {id:1, content: 'hello everyone1!', likes: 20},
        {id:1, content: 'hello everyone2!', likes: 30},
        {id:1, content: 'hello everyone3!', likes: 40}
    ],
        mainPhoto: 'https://www.w3schools.com/howto/img_avatar.png',
        newPostText: 'New post'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            let newPost = {
                id: 5,
                content: stateCopy.newPostText,
                likes: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newPostText: text });

export default profileReducer;