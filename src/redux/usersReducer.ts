export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    checkedPage: number
    maxRenderPages: number
    minRenderPages: number
}

export const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    checkedPage: 1,
    maxRenderPages: 5,
    minRenderPages: 0
}

export type UsersPageActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setCheckedPageAC>
    | ReturnType<typeof setMaxRenderPageAC>
    | ReturnType<typeof setMinRenderPageAC>

export const usersReducer = (state = initialState, action: UsersPageActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        u.followed = true
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        u.followed = false
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: action.users }
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "SET-CHECKED-PAGE":
            return {...state, checkedPage: action.checkedPage}
        case "SET-MIN-RENDER-PAGE":
            return {...state, minRenderPages: action.minRenderPages}
        case "SET-MAX-RENDER-PAGE":
            return {...state, maxRenderPages: action.maxRenderPages}
        default: return state
    }
}

export const followAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: "SET-USERS", users} as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {type: "SET-TOTAL-COUNT", totalCount} as const
}
export const setCheckedPageAC = (checkedPage: number) => {
    return {type: "SET-CHECKED-PAGE", checkedPage} as const
}
export const setMaxRenderPageAC = (maxRenderPages: number) => {
    return {type: "SET-MAX-RENDER-PAGE", maxRenderPages} as const
}
export const setMinRenderPageAC = (minRenderPages: number) => {
    return {type: "SET-MIN-RENDER-PAGE", minRenderPages} as const
}