import {
    follow,
    setCheckedPage, setLoading,
    setMaxRenderPage, setMinRenderPage,
    setTotalCount,
    unfollow,
    UsersPageType,
    usersReducer
} from "../usersReducer";

let startState: UsersPageType ;

beforeEach(() => {
    startState = {
        users: [
            {
                name: "Vitalik",
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: true
            },
            {
                name: "Ira",
                id: 2,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: true
            },
            {
                name: "Hristich",
                id: 3,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: true
            },
        ],
        totalCount: 0,
        pageSize: 5,
        checkedPage: 1,
        maxRenderPages: 5,
        minRenderPages: 0,
        isLoading: false
    }
})

test("the followed field must be changed to true", () => {
    const endState = usersReducer(startState, follow(2))
    expect(endState.users[1].followed).toBe(true)
})

test("the followed field must be changed to false", () => {
    const endState_test_1 = usersReducer(startState, unfollow(1))
    const endState_test_2 = usersReducer(startState, unfollow(3))
    expect(endState_test_1.users[0].followed).toBe(false)
    expect(endState_test_2.users[2].followed).toBe(false)
})
test("totalCount must be changed", () => {
    const endState = usersReducer(startState, setTotalCount(10))
    expect(endState.totalCount).toBe(10)
})
test("checkedPage must be changed", () => {
    const endState = usersReducer(startState, setCheckedPage(2))
    expect(endState.checkedPage).toBe(2)
})
test("maxRenderPages must be changed", () => {
    const endState = usersReducer(startState, setMaxRenderPage(10))
    expect(endState.maxRenderPages).toBe(10)
})
test("minRenderPages must be changed", () => {
    const endState = usersReducer(startState, setMinRenderPage(2))
    expect(endState.minRenderPages).toBe(2)
})
test("isLoading must be changed", () => {
    const endState = usersReducer(startState, setLoading(true))
    expect(endState.isLoading).toBe(true)
})