import {v1} from "uuid";
import {Dispatch} from "react";
import {profileAPI} from "../api/api";
import {AppActionsType, AppThunk} from "./store";

export type PostType = {
    id: string
    message: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number,
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>

    profile: UserProfileType | null
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ],
    profile: null,
    status: ""
}

export type ProfilePageActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>

export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostMessage
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-PROFILE-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (newPostMessage: string) => {
    return {type: "ADD-POST", newPostMessage} as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const setProfileStatus = (status: string) => {
    return {type: "SET-PROFILE-STATUS", status} as const
}

export const getProfile = (userID: number): AppThunk => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}
export const getStatus = (userID: number): AppThunk => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateStatus = (status: string): AppThunk => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}