import React from "react";
import {NavLink} from "react-router-dom";
import S from "./Neon.module.css"

type NeonType = {
    title: string
    instruction?: () => void
    path?: string
}
export function NeonButton(props: NeonType) {
    return (
        <div className={S.neon} onClick={props.instruction}>
            <NavLink to={props.path ? "/" + props.path : "#"} className={S.button}>
                <span className={S.button_line + " " + S.button_line_top}/>
                <span className={S.button_line + " " + S.button_line_right}/>
                <span className={S.button_line + " " + S.button_line_bottom}/>
                <span className={S.button_line + " " + S.button_line_left}/>
                {props.title}
            </NavLink>
        </div>
    );
}
