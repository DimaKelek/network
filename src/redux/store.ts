import {combineReducers, createStore, applyMiddleware} from "redux"
import {DialogsPageActionsType, dialogsReducer} from "./dialogsReducer";
import {ProfilePageActionsType, profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {UsersPageActionsType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppActionType} from "./app-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType =
    ProfilePageActionsType
    | AuthActionType
    | AppActionType
    | DialogsPageActionsType
    | UsersPageActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store