import React from "react";
import S from "./MenuItem.module.css"
import {NavLink} from "react-router-dom";

type MenuItemPropsType = {
    id: string
    title: string
    path: string
}

export function MenuItem(props: MenuItemPropsType) {
    let path = "/" + props.path;
    return (
        <div className={S.item}>
            <NavLink to={path} activeClassName={S.activeLink}>{props.title}</NavLink>
        </div>
    );
}