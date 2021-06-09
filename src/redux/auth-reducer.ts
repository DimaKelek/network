type AuthActionType = ReturnType<typeof setUserData>

export type AuthUser = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthUser = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReduser = (state: AuthUser = initialState, action: AuthActionType): AuthUser => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (userId: number, email: string, login: string) => {
    return {type: "SET-USER-DATA", data: {userId, email, login}} as const
}