import {combineReducers, createStore, applyMiddleware} from "redux"
import {DialogsPageActionsType, dialogsReducer} from "./dialogsReducer";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {UsersPageActionsType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppActionsType, appReducer} from "./app-reducer";

// store
const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// types
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, mainAppActionsType>
export type mainAppActionsType =
    ProfileActionsType
    | AuthActionType
    | AppActionsType
    | DialogsPageActionsType
    | UsersPageActionsType

type PropType<T> = T extends {[key: string]: infer U} ? U : never
export type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropType<T>>

//@ts-ignore
window.store = store