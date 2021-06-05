import {v1} from "uuid";
import {addPost, ProfilePageType, profileReducer, setName, setUserProfile, updateNewPost} from "../profileReducer";

let startState: ProfilePageType;

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "What are you doing?"}
        ],
        newPostText: "Hello world",
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null,
            },
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: null,
            userId: 0,
            photos: {
                small: null,
                large: null,
            }
        }
    }

})

test("post message should be added", () => {
    const endState = profileReducer(startState, addPost())
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe("Hello world")
    expect(endState.newPostText).toBe("")
})
test("post message for textarea should be changed", () => {
    const endState = profileReducer(startState, updateNewPost("Hello dude"))
    expect(endState.newPostText).toBe("Hello dude")
})
test("full name must be changed", () => {
    const endState = profileReducer(startState, setName("Виталик"))
    expect(endState.profile.fullName).toBe("Виталик")
})
test("User Profile must be changed", () => {
    const endState = profileReducer(startState, setUserProfile({...startState.profile, userId: 45}))
    expect(endState.profile.userId).toBe(45)
})