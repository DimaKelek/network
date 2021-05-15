import React from "react";
import { Avatar } from "./Avater/Avatar";
import S from "./LeftColumn.module.css"
import {Friends} from "./Friends/Friends";

type LeftColumnPropsType = {

}
export function LeftColumn(props: LeftColumnPropsType) {
    return (
        <div className={S.content}>
            <Avatar />
            <Friends />
        </div>
    );
}