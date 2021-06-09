import {v1} from "uuid";

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
    newPostText: string

    profile: UserProfileType | null
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ],
    newPostText: "",
    profile: null
}

export type ProfilePageActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPost>
    | ReturnType<typeof setName>
    | ReturnType<typeof setUserProfile>

export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: v1(), message: state.newPostText}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-NAME":
            if(state.profile) {
                return {...state, profile: {...state.profile, fullName: action.fullName}}
            } else {
                return {...state}
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPost = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText} as const
}
export const setName = (fullName: string) => {
    return {type: "SET-NAME", fullName} as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}