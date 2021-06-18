import {usersAPI} from "../api/api";
import {AppDispatch} from "./redux-store";
import {Dispatch} from "react";
import { ThunkAction } from "redux-thunk";

export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    checkedPage: number
    maxRenderPages: number
    minRenderPages: number
    isLoading: boolean
    followInProgress: number[]
}

export const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    checkedPage: 1,
    maxRenderPages: 5,
    minRenderPages: 0,
    isLoading: false,
    followInProgress: []
}

export type UsersPageActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCheckedPage>
    | ReturnType<typeof setMaxRenderPage>
    | ReturnType<typeof setMinRenderPage>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setFollowInProgress>

export const usersReducer = (state = initialState, action: UsersPageActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        u.followed = true
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        u.followed = false
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: action.users }
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "SET-CHECKED-PAGE":
            return {...state, checkedPage: action.checkedPage}
        case "SET-MIN-RENDER-PAGE":
            return {...state, minRenderPages: action.minRenderPages}
        case "SET-MAX-RENDER-PAGE":
            return {...state, maxRenderPages: action.maxRenderPages}
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-FOLLOW-IN-PROGRESS":
            return {
                ...state,
                followInProgress: action.isLoading
                    ? [...state.followInProgress, action.userID]
                    : state.followInProgress.filter(id => id !== action.userID)
            }
        default: return state
    }
}

export const followSuccess = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowSuccess = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: "SET-USERS", users} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: "SET-TOTAL-COUNT", totalCount} as const
}
export const setCheckedPage = (checkedPage: number) => {
    return {type: "SET-CHECKED-PAGE", checkedPage} as const
}
export const setMaxRenderPage = (maxRenderPages: number) => {
    return {type: "SET-MAX-RENDER-PAGE", maxRenderPages} as const
}
export const setMinRenderPage = (minRenderPages: number) => {
    return {type: "SET-MIN-RENDER-PAGE", minRenderPages} as const
}
export const setLoading = (isLoading: boolean) => {
    return {type: "SET-LOADING", isLoading} as const
}
export const setFollowInProgress = (userID: number, isLoading: boolean) => {
    return {type: "SET-FOLLOW-IN-PROGRESS", userID, isLoading} as const
}


// export type ThunkActionType<R, S, E, A extends Action> = (
//     dispatch: ThunkDispatch<S, E, A>,
//     getState: () => S,
//     extraArgument: E) => R

export const getUsers = (checkedPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersPageActionsType>) => {
        dispatch(setLoading(true))
        usersAPI.getUsers(checkedPage, pageSize).then(data => {
            dispatch(setLoading(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }
}

export const follow = (userID: number) => {
    return (dispatch: Dispatch<UsersPageActionsType>) => {
        dispatch(setFollowInProgress(userID, true))
        usersAPI.followUser(userID).then(data => {
            data.resultCode === 0 && dispatch(followSuccess(userID))
            dispatch(setFollowInProgress(userID, false))
        })
    }
}

export const unfollow = (userID: number) => {
    return (dispatch: Dispatch<UsersPageActionsType>) => {
        dispatch(setFollowInProgress(userID, true))
        usersAPI.unfollowUser(userID).then(data => {
            data.resultCode === 0 && dispatch(unfollowSuccess(userID))
            dispatch(setFollowInProgress(userID, false))
        })
    }
}