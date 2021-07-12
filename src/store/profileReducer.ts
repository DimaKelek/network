import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {AppThunk} from "./store";

const initialState = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ] as Array<PostType>,
    profile: null as UserProfileType | null,
    status: ""
}

export const profileReducer = (state: initialStateType = initialState, action: ProfilePageActionsType): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostMessage
            }
            return {...state, posts: [newPost, ...state.posts],}
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-PROFILE-STATUS":
            return {...state, status: action.status}
        case "SET-PHOTOS":
            return {...state, profile: {...state.profile, photos: action.photos} as UserProfileType}
        default:
            return state
    }
}

// actions
export const addPost = (newPostMessage: string) => ({type: "ADD-POST", newPostMessage} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setProfileStatus = (status: string) => ({type: "SET-PROFILE-STATUS", status} as const)
export const setPhotos = (photos: PhotosType) => ({type: "SET-PHOTOS", photos} as const)

// thunks
export const getProfile = (userID: number): AppThunk => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response))
    })
}
export const getStatus = (userID: number): AppThunk => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setProfileStatus(response.data))
    })
}
export const updateStatus = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        response.resultCode === 0 && dispatch(setProfileStatus(status))
    })
}
export const updatePhotos = (file: File): AppThunk => (dispatch) => {
    profileAPI.editPhotos(file).then(response => {
        response.resultCode === 0 && dispatch(setPhotos(response.data.photos))
    })
}

// types
export type PostType = {
    id: string
    message: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type initialStateType = typeof initialState

export type ProfilePageActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>
    | ReturnType<typeof setPhotos>