import React from 'react';
import {Navbar} from "./Navbar";
import {StoreType} from "../../redux/redux-store";

type NavbarContainerPropsType = {
    store: StoreType
}

export function NavbarContainer(props: NavbarContainerPropsType) {

    const navbar = props.store.getState().navbar
    return (
        <Navbar navbar={navbar}/>
    );
}