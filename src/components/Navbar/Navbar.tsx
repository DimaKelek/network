import React from 'react';
import {MenuItem} from './MenuItem/MenuItem';
import S from './Navbar.module.css';
import { NavbarPropsType } from './NavbarContainer';

export function Navbar(props: NavbarPropsType) {
    const navbarMenuItems = props.navbarItems.map( m =>
        <MenuItem key={m.id} id={m.id} title={m.title} path={m.path} />)
    return (
        <nav className={S.nav}>
            <div className={S.menu}>
                {navbarMenuItems}
            </div>
        </nav>
    );
}