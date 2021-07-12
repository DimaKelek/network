import {v1} from "uuid";
import {ActionsTypes} from "./store";

const initialState = {
    dialogs: [
        {id: v1(), name: "Виталик"},
        {id: v1(), name: "Яна"},
        {id: v1(), name: "Ира"},
        {id: v1(), name: "Андрей"},
        {id: v1(), name: "Артур"}
    ] as DialogType[],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing?"}
    ] as MessageType[]
}

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsPageActionsType): DialogPageType => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            let newMessage: MessageType = {
                id: v1(),
                message: action.newMessage
            }
            return {...state, messages: [...state.messages, newMessage],}
        }
        default: return state
    }
}

// actions
export const dialogsActions = {
    sendMessage: (newMessage: string) => ({type: "SEND_MESSAGE", newMessage} as const)
}

// types
export type DialogsPageActionsType = ActionsTypes<typeof dialogsActions>

export type DialogPageType = typeof initialState
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}