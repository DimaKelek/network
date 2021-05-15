import React from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/MessageItem";
import {addMessageAC, DialogPageType, updateMessageTextAC} from "../../redux/dialogsReducer";
import {ActionsTypes} from "../../redux/redux-store";

type DialogsPagePropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPagePropsType) {
    debugger
    const dialogs = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messages = props.dialogsPage.messages.map( d => <Message key={d.id} id={d.id} message={d.message} />);

    const newMessage = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        if(newMessage.current) {
            props.dispatch(addMessageAC())
        }
    }
    const onMessageChange = () => {
        if(newMessage.current) {
            const newText = newMessage.current.value
            props.dispatch(updateMessageTextAC(newText))
        }
    }
    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_box}>
                {dialogs}
            </div>
            <div className={S.messages_box}>
                {messages}
            </div>
            <div className={S.addMessage_box}>
                <div><textarea
                    ref={newMessage}
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange}
                    placeholder="Enter your message!!!"/>
                </div>
                <div><button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    );
}