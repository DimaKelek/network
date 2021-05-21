import {v1} from "uuid";
import {addMessageAC, DialogPageType, dialogsReducer, updateMessageTextAC} from "../dialogsReducer";

test("message should be added", () => {
    const startState: DialogPageType = {
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
        newMessageText: "Hello my best friends"
    }

    const endState = dialogsReducer(startState, addMessageAC())

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe("Hello my best friends")
    expect(endState.newMessageText).toBe("")
})
test("message for textarea should be changed", () => {
    const startState: DialogPageType = {
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

    const endState = dialogsReducer(startState, updateMessageTextAC("Hello"))

    expect(endState.newMessageText).toBe("Hello")
})
