type AuthActionType = ReturnType<typeof setUserData>

type AuthUser = {
    userId: number | null
    email: string | null
    login: string | null
}

const initialState: AuthUser = {
    userId: null,
    email: null,
    login: null,
}

export const authReduser = (state: AuthUser = initialState, action: AuthActionType): AuthUser => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setUserData = (data: AuthUser) => {
    return {type: "SET-USER-DATA", data} as const
}