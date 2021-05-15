import React from 'react';
import {MenuItem} from './MenuItem/MenuItem';
import S from './Navbar.module.css';
import {NavbarMenuType} from "../../redux/navbarReducer";

type NavbarPropsType = {
    navbar: NavbarMenuType
}

export function Navbar(props: NavbarPropsType) {
    const navbarData = props.navbar.navbarData
    const menuItems = navbarData.map( (m) => <MenuItem key={m.id} id={m.id} title={m.title} path={m.path} />)
    return (
        <nav className={S.nav}>
            <div className={S.menu}>
                {menuItems}
            </div>
        </nav>
    );
}