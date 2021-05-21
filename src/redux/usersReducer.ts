import { v1 } from "uuid";

type LocationType = {
    country: string
    city: string
}
type UserType = {
    id: string
    firstname: string
    avatar: string
    followed: boolean
    location: LocationType
    status: string
}
type UsersPageType = {
    users: Array<UserType>
}

const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            firstname: "Vitalik",
            avatar: "https://goo.su/4zdi",
            followed: true,
            location: {
                country: "Belarus",
                city: "Gomel"
            },
            status: "Hello, i'm Vitalik"
        },
        {
            id: v1(),
            firstname: "Ira",
            avatar: "https://goo.su/4zdi",
            followed: false,
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "Hello, i'm Ira"
        },
        {
            id: v1(),
            firstname: "Hristich",
            avatar: "https://goo.su/4zdi",
            followed: true,
            location: {
                country: "Belarus",
                city: "Vlavsk"
            },
            status: "Hello, i'm Hristich"
        },
    ]
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
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

const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const
}
const unfollowAC = (userID: string) => {
    return {type: "UNFOLLOW", userID} as const
}