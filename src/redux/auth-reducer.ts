import {authAPI} from "../api/api";
import {Dispatch} from "react";

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

export const getAuth = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                let newUserData: AuthUserType = {userId: id, email, login, isAuth: true}
                dispatch(setUserData(newUserData))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                // //@ts-ignore
                // dispatch(getAuth())
                authAPI.me().then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data
                        let newUserData: AuthUserType = {userId: id, email, login, isAuth: true}
                        dispatch(setUserData(newUserData))
                    }
                })
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
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