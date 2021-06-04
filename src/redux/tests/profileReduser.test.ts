import {v1} from "uuid";
import {addPostAC, ProfilePageType, profileReducer, updateNewPostAC} from "../profileReducer";

let startState: ProfilePageType;

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "What are you doing?"}
        ],
        newPostText: "Hello world"
    }
})

test("post message should be added", () => {
    const endState = profileReducer(startState, addPostAC())
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe("Hello world")
    expect(endState.newPostText).toBe("")
})
test("post message for textarea should be changed", () => {
    const endState = profileReducer(startState, updateNewPostAC("Hello dude"))
    expect(endState.newPostText).toBe("Hello dude")
})