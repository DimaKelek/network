import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type NavbarType = {
    id: string
    title: string
    path: string
}
export type NavbarMenuType = {
    navbarMenu: Array<NavbarType>
}

const initialState: NavbarMenuType = {
    navbarMenu: [
        {id: v1(), title: "✓ Profile", path: "profile"},
        {id: v1(), title: "✉ Messages", path: "dialogs"},
        {id: v1(), title: "☖ News", path: "news"},
        {id: v1(), title: "♫ Music", path: "music"},
        {id: v1(), title: "✱ Settings", path: "settings"}
    ]
}

export const navbarReducer = (state: NavbarMenuType = initialState, action: ActionsTypes) => {
    return state;
}
