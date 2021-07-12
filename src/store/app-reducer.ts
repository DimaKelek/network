import {getAuth} from "./auth-reducer";
import {ActionsTypes, AppThunk} from "./store";

const initialState = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

// actions
export const appActions = {
    setInitialized: () => ({type: "APP/SET-INITIALIZED"} as const)
}

// thunks
export const initApp = (): AppThunk => (dispatch) => {
    let auth = dispatch(getAuth())
    Promise.all([auth]).then(() => {
        dispatch(appActions.setInitialized())
    })
}

// types
export type AppActionsType = ActionsTypes<typeof appActions>
type AppInitialStateType = typeof initialState