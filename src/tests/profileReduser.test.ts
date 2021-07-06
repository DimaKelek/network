import {v1} from "uuid";
import {addPost, ProfilePageType, profileReducer} from "../store/profileReducer";

let startState: ProfilePageType;

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "What are you doing?"}
        ],
        profile: {
            aboutMe: "",
            contacts: {
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: "",
            },
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: "",
            userId: 0,
            photos: {
                small: "",
                large: "",
            }
        },
        status: ""
    }

})

test("post message should be added", () => {
    const endState = profileReducer(startState, addPost("Hello world"))
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe("Hello world")
})