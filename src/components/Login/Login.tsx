import React from "react";
import S from "./Login.module.css"
import {MyButton} from "../Decoration/MyButton/MyButton";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

function Login(props: LoginPropsType) {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div className={S.login}>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>login</h2>
            <div className={`${S.input} ${S.name}`}>
                <Field placeholder={"Email"} name={"email"} component={"input"}/>
            </div>
            <div className={`${S.input} ${S.password}`}>
                <Field placeholder={"Password"} name={"password"} component={"input"} type={"password"}/>
            </div>
            <div className={S.checkbox}>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> Remember me
            </div>
            <div className={S.button}>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm<FormDataType>({form: "Login"})(LoginForm)

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const dispatch: MapDispatchToPropsType = {login, logout}
export const LoginContainer =  connect(mapStateToProps, dispatch)(Login)