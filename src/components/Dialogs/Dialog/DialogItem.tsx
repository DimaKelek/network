import React from "react";
import S from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../store/dialogsReducer";


export function DialogItem(props: DialogType) {
    let path = "/dialogs/" + props.id
    return (
        <div className={S.dialog}>
            <NavLink to={path} activeClassName={S.activeLink}>
                <div className={S.dialog_box}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}