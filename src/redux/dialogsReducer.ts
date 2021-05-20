import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

const initialState: DialogPageType = {
    dialogs: [
        {id: v1(), name: "Виталик"},
        {id: v1(), name: "Яна"},
        {id: v1(), name: "Ира"},
        {id: v1(), name: "Андрей"},
        {id: v1(), name: "Артур"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            let newMessage: MessageType = {id: v1(), message: state.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.newText}
        }
        default: return state
    }
}

export const addMessageAC = () => {
    return {type: "SEND_MESSAGE"} as const
}
export const updateMessageTextAC = (newText: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText} as const
}