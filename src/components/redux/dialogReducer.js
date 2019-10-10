const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.messages = [...state.messages];
            let newMessage = {
                id: 6,
                message: stateCopy.newMessageText
            };
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessageText: text });

export default dialogReducer;