import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...restProps as T}/>
    }

    const mapStateToProps = (state: AppStateType): MapStatePropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}