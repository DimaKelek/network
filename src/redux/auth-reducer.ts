import {authAPI} from "../api/api";
import {Dispatch} from "react";
import {stopSubmit} from "redux-form";
import {AppActionsType, AppThunk} from "./store";

export type AuthActionType = ReturnType<typeof setUserData>

export type AuthUserType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthUserType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthUserType = initialState, action: AuthActionType): AuthUserType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (data: AuthUserType) => {
    return {type: "SET-USER-DATA", data} as const
}
export const getAuth = (): AppThunk<Promise<void>> => {
    return (dispatch)  => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    let newUserData: AuthUserType = {userId: id, email, login, isAuth: true}
                    dispatch(setUserData(newUserData))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                    dispatch(stopSubmit("Login", {_error: message}))
                }
            })
    }
}

export const logout = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                let newUserData: AuthUserType = {
                    userId: null,
                    email: null,
                    login: null,
                    isAuth: false
                }
                dispatch(setUserData(newUserData))
            }
        })
    }
}