import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state :  {

        profilePage: {
            posts: [
                {id:1, content: 'Post1', likes: 10},
                {id:1, content: 'Post2', likes: 20},
                {id:1, content: 'Post3', likes: 30},
                {id:1, content: 'Post4', likes: 40}
            ],
            mainPhoto: 'https://www.w3schools.com/howto/img_avatar.png',
            newPostText: 'dich'
        },

        dialogPage: {
            dialogs: [
                {id: 1, name: 'Name1'},
                {id: 2, name: 'Name2'},
                {id: 3, name: 'Name3'},
                {id: 4, name: 'Name4'}
            ],
            messages: [
                {id: 1, message: 'Heyo'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Salam'},
                {id: 5, message: 'Ola'}
            ],
            newMessageText: ''
        }

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('CHANGED');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newPostText: text });

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessageText: text });


window.store = store;

export default store;