import {v1} from "uuid";

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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
    ]
}

export type DialogsPageActionsType = ReturnType<typeof sendMessage>

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsPageActionsType): DialogPageType => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            let newMessage: MessageType = {
                id: v1(),
                message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default: return state
    }
}

export const sendMessage = (newMessage: string) => {
    return {type: "SEND_MESSAGE", newMessage} as const
}