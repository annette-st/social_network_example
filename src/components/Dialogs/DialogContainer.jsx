import React from 'react';
import Dialogs from "./Dialogs";
import connect from "react-redux/es/connect/connect";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogReducer";

// const DialogContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState();
//
//                     let addMessage = () => {
//                         store.dispatch(addNewMessageActionCreator());
//                     };
//
//                     let updateMessage = (text) => {
//                         store.dispatch(updateNewMessageActionCreator(text));
//                     };
//
//                     return (
//                         <Dialogs addMessage={addMessage} updateMessage={updateMessage} state={state}/>
//                         );
//                 }
//             }
//         </StoreContext.Consumer>
//     );
//
//
// }

let mapStateToProps = (state) => {
    return {
        state: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addNewMessageActionCreator()),
        updateMessage: (text) => dispatch(updateNewMessageActionCreator(text))
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;