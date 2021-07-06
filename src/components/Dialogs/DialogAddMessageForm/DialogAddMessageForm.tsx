import {maxLengthCreator, required} from "../../Decoration/FormControl/validator";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import S from "../Dialogs.module.css";
import {ValidateTextarea} from "../../Decoration/FormControl/FormControl";
import {MyButton} from "../../Decoration/MyButton/MyButton";

export type MessageFormDataType = {
    newMessage: string
}

const maxLength30 = maxLengthCreator(30)
const DialogAddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div className={S.textBox}>
            <Field name={"newMessage"} placeholder="Enter your message!!!"
                   component={ValidateTextarea} validate={[required, maxLength30]}/>
        </div>
        <MyButton>Send</MyButton>
    </form>;
}

export const DialogAddMessageReduxFrom = reduxForm<MessageFormDataType>({form: "AddMessage"})(DialogAddMessageForm)