// window.store = store;

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
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('CHANGED');
    },
    addPost() {
        let newPost = {
            id: 5,
            content: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    updateNewPost(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;