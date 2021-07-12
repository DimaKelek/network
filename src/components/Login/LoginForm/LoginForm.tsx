import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Decoration/FormControl/validator";
import React from "react";
import S from "../Login.module.css";
import {ValidateInput} from "../../Decoration/FormControl/FormControl";
import {MyButton} from "../../Decoration/MyButton/MyButton";
import {createField} from "../../Decoration/FormControl/createField/createField";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength35 = maxLengthCreator(35)
const maxLength20 = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo(props => {
    const {error, handleSubmit, ...restProps} = props

    return (
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            {createField("email", ValidateInput, "Email", [required, maxLength35])}
            {createField("password", ValidateInput, "Password", [required, maxLength20], "password")}
            {createField("password", "input", "Password", [], "checkbox", "Remember me")}
            {error && <div style={{color: "#e56969", marginBottom: "10px"}}>{error}</div>}
            <div className={S.button}>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
})
export const LoginReduxFrom = reduxForm<FormDataType>({form: "Login"})(LoginForm)

