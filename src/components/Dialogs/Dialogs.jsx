import React from 'react';
import s from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( (dialogItem) => (<DialogItem name={dialogItem.name} id={dialogItem.id}/>));


    let messagesItems = props.state.messages
        .map( (messagesItem) => (<Message message={messagesItem.message} id={messagesItem.id}/>));

    let newMessage = React.createRef();

    let addNewMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div>Dialogs:
                { dialogsElements }
            </div>
            <div>Messages from the dialog:
                { messagesItems }
                <textarea ref={ newMessage }></textarea>
                <button onClick={ addNewMessage }>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;