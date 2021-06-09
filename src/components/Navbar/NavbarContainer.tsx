import React from 'react';
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {NavbarMenuType} from "../../redux/navbarReducer";

type MapStatePropsType = NavbarMenuType
type MapDispatchPropsType = {}

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        navbarItems: state.navbar.navbarItems
    }
}
const dispatch: MapDispatchPropsType = () => {}
export const NavbarContainer = connect(mapStateToProps, dispatch)(Navbar)