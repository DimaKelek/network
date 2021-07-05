import React from 'react';
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {NavbarMenuType} from "../../redux/navbarReducer";

type MapStatePropsType = NavbarMenuType


export type NavbarPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        navbarItems: state.navbar.navbarItems
    }
}
export const NavbarContainer = connect(mapStateToProps)(Navbar)