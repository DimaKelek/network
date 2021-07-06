import {combineReducers, createStore, applyMiddleware} from "redux"
import {DialogsPageActionsType, dialogsReducer} from "./dialogsReducer";
import {ProfilePageActionsType, profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {UsersPageActionsType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppActionType, appReducer} from "./app-reducer";

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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export type AppActionsType =
    ProfilePageActionsType
    | AuthActionType
    | AppActionType
    | DialogsPageActionsType
    | UsersPageActionsType

//@ts-ignore
window.store = store