import React from "react";
import S from "./Login.module.css"
import {MyButton} from "../Decoration/MyButton/MyButton";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {SuperInput} from "../Decoration/SuperInput/SuperInput";
import {ReactCheckbox} from "../Decoration/ReactCheckbox/ReactCheckbox";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export function Login() {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    return (
        <div className={S.login}>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    const loginInput = () => {
        return <SuperInput placeholder={"Login"}/>
    }
    const passwordInput = () => {
        return <SuperInput placeholder={"Password"}/>
    }
    const checkBox = () => {
        return <ReactCheckbox>Remember Me</ReactCheckbox>
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>login</h2>
            <div className={`${S.input} ${S.name}`}>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div className={`${S.input} ${S.password}`}>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div className={S.checkbox}>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>Remember me
            </div>
            <div className={S.button}>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm<FormDataType>({form: "Login"})(LoginForm)