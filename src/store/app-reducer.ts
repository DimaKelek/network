import {getAuth} from "./auth-reducer";
import {AppThunk} from "./store";

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

// actions
export const setInitialized = () => ({type: "SET-INITIALIZED"} as const)

// thunks
export const initApp = (): AppThunk => (dispatch) => {
    let auth = dispatch(getAuth())
    Promise.all([auth]).then(() => {
        dispatch(setInitialized())
    })
}

// types
export type AppActionType = ReturnType<typeof setInitialized>
type AppInitialStateType = {
    initialized: boolean
}