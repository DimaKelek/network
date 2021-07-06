import {v1} from "uuid";
import {DialogPageType, dialogsReducer, sendMessage} from "../store/dialogsReducer";

let startState: DialogPageType;

beforeEach(() => {
    startState = {
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
})

test("message should be added", () => {
    const endState = dialogsReducer(startState, sendMessage("Hello my best friends"))
    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe("Hello my best friends")
})
