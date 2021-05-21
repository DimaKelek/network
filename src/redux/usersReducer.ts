import { v1 } from "uuid";

export type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    firstname: string
    avatar: string
    followed: boolean
    location: LocationType
    status: string
}
export type UsersPageType = {
    users: Array<UserType>
}

export const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            firstname: "Vitalik",
            avatar: "https://goo.su/5jxu",
            followed: true,
            location: {
                country: "Belarus",
                city: "Gomel"
            },
            status: "Hello, i'm Vitalik"
        },
        {
            id: v1(),
            firstname: "Irina",
            avatar: "https://goo.su/5JXV",
            followed: false,
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "Hello, i'm Irina"
        },
        {
            id: v1(),
            firstname: "Hristich",
            avatar: "https://goo.su/5jXv",
            followed: true,
            location: {
                country: "Belarus",
                city: "Vlavsk"
            },
            status: "Hello, i'm Hristich"
        },
    ]
}

export type UsersPageActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>

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
        default: return state
    }
}

export const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: string) => {
    return {type: "UNFOLLOW", userID} as const
}