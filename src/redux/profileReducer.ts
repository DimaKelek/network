import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
}

export type UserProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number,
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

    profile: UserProfileType
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ],
    newPostText: "",
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 0,
        photos: {
            small: null,
            large: null,
        }
    }

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
            return {...state, profile: {...state.profile, fullName: action.fullName}}
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