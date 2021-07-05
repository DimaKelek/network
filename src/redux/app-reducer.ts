import {getAuth} from "./auth-reducer";
import {Dispatch} from "redux";
import {AppActionsType, AppThunk} from "./store";

export type AppActionType = ReturnType<typeof setInitialized>

type AppInitialStateType = {
    initialized: boolean
}

const initialState: AppInitialStateType = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

export const setInitialized = () => {
    return {type: "SET-INITIALIZED"} as const
}

export const initApp = (): AppThunk => {
    return (dispatch) => {
        let auth = dispatch(getAuth())
        Promise.all([auth]).then(() => {
            dispatch(setInitialized())
        })
    }
}
