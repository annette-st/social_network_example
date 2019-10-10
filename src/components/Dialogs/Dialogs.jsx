import React from 'react';
import s from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( (dialogItem) => (<DialogItem name={dialogItem.name} id={dialogItem.id}/>));


    let messagesItems = props.state.messages
        .map( (messagesItem) => (<Message message={messagesItem.message} id={messagesItem.id}/>));

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = () => {
        let text = newMessage.current.value;
        props.updateMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <div>Dialogs:
                { dialogsElements }
            </div>
            <div>Messages from the dialog:
                { messagesItems }
                <textarea onChange={updateMessage} ref={ newMessage } value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;