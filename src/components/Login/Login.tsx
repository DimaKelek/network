import React from "react";
import S from "./Login.module.css"
import {SuperInput} from "../Decoration/SuperInput/SuperInput";
import {ReactCheckbox} from "../Decoration/ReactCheckbox/ReactCheckbox";
import {MyButton} from "../Decoration/MyButton/MyButton";

export function Login() {
    return (
        <div className={S.login}>
            <LoginForm/>
        </div>
    )
}

function LoginForm() {
    return (
        <form>
            <h2>login</h2>
            <div className={`${S.input} ${S.name}`}>
                <SuperInput
                    placeholder="Login"
                />
            </div>
            <div className={`${S.input} ${S.password}`}>
                <SuperInput
                    placeholder="Password"
                />
            </div>
            <div className={S.checkbox}>
                <ReactCheckbox>Remember me</ReactCheckbox>
            </div>
            <div className={S.button}>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
}