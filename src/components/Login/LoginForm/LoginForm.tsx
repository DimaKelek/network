import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Decoration/FormControl/validator";
import React from "react";
import S from "../Login.module.css";
import {ValidateInput} from "../../Decoration/FormControl/FormControl";
import {MyButton} from "../../Decoration/MyButton/MyButton";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength35 = maxLengthCreator(35)
const maxLength20 = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo(props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>login</h2>
            <div className={`${S.input} ${S.name}`}>
                <Field placeholder={"Email"} name={"email"}
                       component={ValidateInput} validate={[required, maxLength35]}/>
            </div>
            <div className={`${S.input} ${S.password}`}>
                <Field placeholder={"Password"} name={"password"}
                       component={ValidateInput} validate={[required, maxLength20]} type={"password"}/>
            </div>
            <div className={S.checkbox}>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> Remember me
            </div>
            {props.error && <div style={{color: "#e56969", marginBottom: "10px"}}>{props.error}</div>}
            <div className={S.button}>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
})
export const LoginReduxFrom = reduxForm<FormDataType>({form: "Login"})(LoginForm)