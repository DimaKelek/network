import {usersAPI} from "../api/api";
import {ActionsTypes, AppThunk} from "./store";

const initialState = {
    users: [] as UserType[],
    totalCount: 0,
    pageSize: 5,
    checkedPage: 1,
    maxRenderPages: 5,
    minRenderPages: 0,
    isLoading: false,
    followInProgress: [] as number[]
}

export const usersReducer = (state = initialState, action: UsersPageActionsType): UsersPageType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {...state,
                users: state.users.map(u => {
                    u.id === action.userID && (u.followed = true)
                    return u
                })
            }
        case "USERS/UNFOLLOW":
            return {...state,
                users: state.users.map(u => {
                    u.id === action.userID && (u.followed = false)
                    return u
                })
            }
        case "USERS/SET-USERS":
            return {...state, users: action.users }
        case "USERS/SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "USERS/SET-CHECKED-PAGE":
            return {...state, checkedPage: action.checkedPage}
        case "USERS/SET-MIN-RENDER-PAGE":
            return {...state, minRenderPages: action.minRenderPages}
        case "USERS/SET-MAX-RENDER-PAGE":
            return {...state, maxRenderPages: action.maxRenderPages}
        case "USERS/SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "USERS/SET-FOLLOW-IN-PROGRESS":
            return {...state,
                followInProgress: action.isLoading
                    ? [...state.followInProgress, action.userID]
                    : state.followInProgress.filter(id => id !== action.userID)
            }
        default: return state
    }
}

// actions
export const usersActions = {
    followSuccess: (userID: number) => ({type: "USERS/FOLLOW", userID} as const),
    unfollowSuccess: (userID: number) => ({type: "USERS/UNFOLLOW", userID} as const),
    setUsers: (users: Array<UserType>) => ({type: "USERS/SET-USERS", users} as const),
    setTotalCount: (totalCount: number) => ({type: "USERS/SET-TOTAL-COUNT", totalCount} as const),
    setCheckedPage: (checkedPage: number) => ({type: "USERS/SET-CHECKED-PAGE", checkedPage} as const),
    setMaxRenderPage: (maxRenderPages: number) => ({type: "USERS/SET-MAX-RENDER-PAGE", maxRenderPages} as const),
    setMinRenderPage: (minRenderPages: number) => ({type: "USERS/SET-MIN-RENDER-PAGE", minRenderPages} as const),
    setLoading: (isLoading: boolean) => ({type: "USERS/SET-LOADING", isLoading} as const),
    setFollowInProgress: (userID: number, isLoading: boolean) =>
        ({type: "USERS/SET-FOLLOW-IN-PROGRESS", userID, isLoading} as const)
}

// thunks
export const getUsers = (checkedPage: number, pageSize: number): AppThunk => (dispatch) => {
    dispatch(usersActions.setLoading(true))
    usersAPI.getUsers(checkedPage, pageSize).then(data => {
        dispatch(usersActions.setLoading(false))
        dispatch(usersActions.setUsers(data.items))
        dispatch(usersActions.setTotalCount(data.totalCount))
    })
}
export const follow = (userID: number): AppThunk => (dispatch) => {
    dispatch(usersActions.setFollowInProgress(userID, true))
    usersAPI.followUser(userID).then(data => {
        data.resultCode === 0 && dispatch(usersActions.followSuccess(userID))
        dispatch(usersActions.setFollowInProgress(userID, false))
    })
}
export const unfollow = (userID: number): AppThunk => (dispatch) => {
    dispatch(usersActions.setFollowInProgress(userID, true))
    usersAPI.unfollowUser(userID).then(data => {
        data.resultCode === 0 && dispatch(usersActions.unfollowSuccess(userID))
        dispatch(usersActions.setFollowInProgress(userID, false))
    })
}

// types
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
export type UsersPageType = typeof initialState

export type UsersPageActionsType = ActionsTypes<typeof usersActions>