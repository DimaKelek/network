import {v1} from "uuid";
import {followAC, unfollowAC, UsersPageType, usersReducer} from "../usersReducer";

const userID_1 = v1()
const userID_2 = v1()
const userID_3 = v1()

test("the followed field must be changed to true", () => {
    const startState: UsersPageType = {
        users: [
            {
                id: userID_1,
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
                id: userID_2,
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
                id: userID_3,
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
    const endState = usersReducer(startState, followAC(userID_2))
    expect(endState.users[1].followed).toBe(true)
})

test("the followed field must be changed to fales", () => {
    const startState: UsersPageType = {
        users: [
            {
                id: userID_1,
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
                id: userID_2,
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
                id: userID_3,
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

    const endState_test_1 = usersReducer(startState, unfollowAC(userID_1))
    const endState_test_2 = usersReducer(startState, unfollowAC(userID_3))
    expect(endState_test_1.users[0].followed).toBe(false)
    expect(endState_test_2.users[2].followed).toBe(false)
})