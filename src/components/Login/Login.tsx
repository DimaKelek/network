import React from "react";
import S from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../store/auth-reducer";
import {AppStateType} from "../../store/store";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxFrom} from "./LoginForm/LoginForm";

const Login: React.FC<LoginPropsType> = React.memo(props => {
    const {login, isAuth, ...restProps} = props

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if(isAuth) return <Redirect to="/profile"/>
    return (
        <>
            <div className={S.testData}>
                <h3>Test data</h3>
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </div>
            <div className={S.login}>
                <LoginReduxFrom onSubmit={onSubmit}/>
            </div>
        </>

    )
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
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
const dispatch: MapDispatchToPropsType = {login}
export const LoginContainer =  connect(mapStateToProps, dispatch)(Login)