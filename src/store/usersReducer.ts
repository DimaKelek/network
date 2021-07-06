import {usersAPI} from "../api/api";
import {AppThunk} from "./store";

export const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    checkedPage: 1,
    maxRenderPages: 5,
    minRenderPages: 0,
    isLoading: false,
    followInProgress: []
}

export const usersReducer = (state = initialState, action: UsersPageActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,
                users: state.users.map(u => {
                    u.id === action.userID && (u.followed = true)
                    return u
                })
            }
        case "UNFOLLOW":
            return {...state,
                users: state.users.map(u => {
                    u.id === action.userID && (u.followed = false)
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
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-FOLLOW-IN-PROGRESS":
            return {...state,
                followInProgress: action.isLoading
                    ? [...state.followInProgress, action.userID]
                    : state.followInProgress.filter(id => id !== action.userID)
            }
        default: return state
    }
}

// actions
export const followSuccess = (userID: number) =>
    ({type: "FOLLOW", userID} as const)
export const unfollowSuccess = (userID: number) =>
    ({type: "UNFOLLOW", userID} as const)
export const setUsers = (users: Array<UserType>) =>
    ({type: "SET-USERS", users} as const)
export const setTotalCount = (totalCount: number) =>
    ({type: "SET-TOTAL-COUNT", totalCount} as const)
export const setCheckedPage = (checkedPage: number) =>
    ({type: "SET-CHECKED-PAGE", checkedPage} as const)
export const setMaxRenderPage = (maxRenderPages: number) =>
    ({type: "SET-MAX-RENDER-PAGE", maxRenderPages} as const)
export const setMinRenderPage = (minRenderPages: number) =>
    ({type: "SET-MIN-RENDER-PAGE", minRenderPages} as const)
export const setLoading = (isLoading: boolean) =>
    ({type: "SET-LOADING", isLoading} as const)
export const setFollowInProgress = (userID: number, isLoading: boolean) =>
    ({type: "SET-FOLLOW-IN-PROGRESS", userID, isLoading} as const)

// thunks
export const getUsers = (checkedPage: number, pageSize: number): AppThunk => (dispatch) => {
    dispatch(setLoading(true))
    usersAPI.getUsers(checkedPage, pageSize).then(data => {
        dispatch(setLoading(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    })
}
export const follow = (userID: number): AppThunk => (dispatch) => {
    dispatch(setFollowInProgress(userID, true))
    usersAPI.followUser(userID).then(data => {
        data.resultCode === 0 && dispatch(followSuccess(userID))
        dispatch(setFollowInProgress(userID, false))
    })
}
export const unfollow = (userID: number): AppThunk => (dispatch) => {
    dispatch(setFollowInProgress(userID, true))
    usersAPI.unfollowUser(userID).then(data => {
        data.resultCode === 0 && dispatch(unfollowSuccess(userID))
        dispatch(setFollowInProgress(userID, false))
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
export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    checkedPage: number
    maxRenderPages: number
    minRenderPages: number
    isLoading: boolean
    followInProgress: number[]
}

export type UsersPageActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCheckedPage>
    | ReturnType<typeof setMaxRenderPage>
    | ReturnType<typeof setMinRenderPage>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setFollowInProgress>