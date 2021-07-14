import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {ActionsTypes, AppThunk} from "./store";
import {PhotosType} from "./usersReducer";
import {ServerResponses} from "../utils/enums";

const initialState = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ] as Array<PostType>,
    profile: null as UserProfileType | null,
    status: ""
}

export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsType): initialStateType => {
    switch (action.type) {
        case "PROFILE/ADD-POST": {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostMessage
            }
            return {...state, posts: [newPost, ...state.posts],}
        }
        case "PROFILE/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE/SET-PROFILE-STATUS":
            return {...state, status: action.status}
        case "PROFILE/SET-PHOTOS":
            return {...state, profile: {...state.profile, photos: action.photos} as UserProfileType}
        default:
            return state
    }
}

// actions
export const profileActions = {
    addPost: (newPostMessage: string) => ({type: "PROFILE/ADD-POST", newPostMessage} as const),
    setUserProfile: (profile: UserProfileType) => ({type: "PROFILE/SET-USER-PROFILE", profile} as const),
    setProfileStatus: (status: string) => ({type: "PROFILE/SET-PROFILE-STATUS", status} as const),
    setPhotos: (photos: PhotosType) => ({type: "PROFILE/SET-PHOTOS", photos} as const)
}

// thunks
export const getProfile = (userID: number): AppThunk => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(profileActions.setUserProfile(response))
    })
}
export const getStatus = (userID: number): AppThunk => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(profileActions.setProfileStatus(response.data))
    })
}
export const updateStatus = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.resultCode === ServerResponses.success) {
            dispatch(profileActions.setProfileStatus(status))
        }
    })
}
export const updatePhotos = (file: File): AppThunk => (dispatch) => {
    profileAPI.editPhotos(file).then(response => {
        if(response.resultCode === ServerResponses.success) {
            dispatch(profileActions.setPhotos(response.data.photos))
        }
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
export type ContactsType = {
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
export type ProfileActionsType = ActionsTypes<typeof profileActions>