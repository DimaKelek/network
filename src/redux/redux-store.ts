import {createStore, combineReducers} from "redux"
import {addMessageAC, DialogPageType, dialogsReducer, updateMessageTextAC} from "./dialogsReducer";
import {addPostAC, ProfilePageType, profileReducer, updateNewPostAC} from "./profileReducer";
import {NavbarMenuType, navbarReducer} from "./navbarReducer";


export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    navbar: NavbarMenuType
}
export type StoreType = {
    _state: RootType
    subscribe: (observer: () => void) => void
    getState: () => RootType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateMessageTextAC>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
})

export const store = createStore(reducers);
