import React from "react";
import S from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/MessageItem";
import {DialogsPagePropsType} from "./DialogsContainer";
import {MyButton} from "../Decoration/MyButton/MyButton";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessageFormDataType = {
    newMessage: string
}

export function Dialogs(props: DialogsPagePropsType) {
    const dialogs = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messages = props.messages.map(d => <Message key={d.id} id={d.id} message={d.message}/>);

    const sendMessage = (values: MessageFormDataType) => {
        props.sendMessage(values.newMessage)
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
                <DialogAddMessageReduxFrom onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

const DialogAddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessage"} placeholder="Enter your message!!!" component={"textarea"}/>
        </div>
        <MyButton>Send</MyButton>
    </form>;
}

const DialogAddMessageReduxFrom = reduxForm<MessageFormDataType>({form: "AddMessage"})(DialogAddMessageForm)