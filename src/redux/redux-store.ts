import {combineReducers, createStore} from "redux"
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store