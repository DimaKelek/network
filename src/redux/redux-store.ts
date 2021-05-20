import {combineReducers, createStore} from "redux"
import {addMessageAC, dialogsReducer, updateMessageTextAC} from "./dialogsReducer";
import {addPostAC, profileReducer, updateNewPostAC} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateMessageTextAC>

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
})

export const store = createStore(rootReducer);
