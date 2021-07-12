import {maxLengthCreator, required} from "../../Decoration/FormControl/validator";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ValidateTextarea} from "../../Decoration/FormControl/FormControl";
import {MyButton} from "../../Decoration/MyButton/MyButton";
import {createField} from "../../Decoration/FormControl/createField/createField";

export type MessageFormDataType = {
    newMessage: string
}

const maxLength30 = maxLengthCreator(30)
const DialogAddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        {createField("newMessage", ValidateTextarea, "Enter your message!!!", [required, maxLength30])}
        <MyButton>Send</MyButton>
    </form>;
}

export const DialogAddMessageReduxFrom = reduxForm<MessageFormDataType>({form: "AddMessage"})(DialogAddMessageForm)