import React from 'react';
import S from './Header.module.css';
import logo from '../../logo.jpg'
import auth from '../../authLogo.jpg'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";


export function Header(props: AuthPropsType) {
    const title = (props.login !== null ? props.login : "No authorization")
        .split('').map( (l, i) => <span key={i}>{l}</span>)
    return (
        <header className={S.header}>
            <div className={S.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={S.title}>
                {title}
            </div>
            <NavLink to="/login">
                <div className={S.auth}>
                    {props.isAuth
                        ? <div className={S.logout} onClick={props.logout}>x</div>
                        : <img src={auth} alt="auth"/>
                    }
                </div>
            </NavLink>
        </header>
    );
}