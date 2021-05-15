import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: string
    message: string
}

const initialState = {
    posts: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ],
    newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    if(action.type === "ADD-POST") {
        let newPost: PostType = {
            id: v1(),
            message: state.newPostText
        }
        state.posts.unshift(newPost)
        state.newPostText = ""
    } else if(action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText
    }
    return state;
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}