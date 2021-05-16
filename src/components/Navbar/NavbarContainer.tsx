import React from 'react';
import {Navbar} from "./Navbar";
import {ActionsTypes, RootType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {NavbarMenuType} from "../../redux/navbarReducer";

type MapStatePropsType = NavbarMenuType
type MapDispatchPropsType = {

}

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        navbarItems: state.navbar.navbarItems
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchPropsType => {
    return {

    }
}
export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)