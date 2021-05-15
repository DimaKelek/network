import React from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/MessageItem";
import {DialogType, MessageType} from "../../redux/dialogsReducer";

type DialogsPagePropsType = {
    sendMessage: () => void
    onMessageChange: (newText: string) => void
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export function Dialogs(props: DialogsPagePropsType) {
    const dialogs = props.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messages = props.messages.map( d => <Message key={d.id} id={d.id} message={d.message} />);

    const newMessage = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        if(newMessage.current) {
            props.sendMessage()
        }
    }
    const onMessageChange = () => {
        if(newMessage.current) {
            const newText = newMessage.current.value
            props.onMessageChange(newText)
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
                    value={props.newMessageText}
                    onChange={onMessageChange}
                    placeholder="Enter your message!!!"/>
                </div>
                <div><button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    );
}