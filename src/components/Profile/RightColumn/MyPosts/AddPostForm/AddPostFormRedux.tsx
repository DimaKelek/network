import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../Decoration/FormControl/validator";
import {ValidateTextarea} from "../../../../Decoration/FormControl/FormControl";
import S from "../MyPosts.module.css";
import {MyButton} from "../../../../Decoration/MyButton/MyButton";

export type AddPostFormPropsType = {
    newPostMessage: string
}
const maxLength30 = maxLengthCreator(30)
const AddPostForm: React.FC<InjectedFormProps<AddPostFormPropsType>> = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={"newPostMessage"}
                placeholder="Что нового?)"
                component={ValidateTextarea}
                validate={[required, maxLength30]}
            />
        </div>
        <div className={S.add}>
            <MyButton>Add Post</MyButton>
        </div>
    </form>;
}
export const AddPostFormRedux = reduxForm<AddPostFormPropsType>({form: "AddPostForm"})(AddPostForm)