import {v1} from "uuid";

const initialState = {
    navbarItems: [
        {id: v1(), title: "✓ Profile", path: "profile"},
        {id: v1(), title: "✉ Messages", path: "dialogs"},
        {id: v1(), title: "☖ News", path: "news"},
        {id: v1(), title: "♫ Music", path: "music"},
        {id: v1(), title: "✱ Settings", path: "settings"},
        {id: v1(), title: "☯ Users", path: "users"}
    ] as NavbarType[]
}

export const navbarReducer = (state: NavbarMenuType = initialState, action: NavbarActionsType) => {
    return state;
}

// types
export type NavbarType = {
    id: string
    title: string
    path: string
}
export type NavbarMenuType = typeof initialState
export type NavbarActionsType = any
