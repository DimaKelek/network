import React from "react";
import { Avatar } from "./Avater/Avatar";
import S from "./LeftColumn.module.css"
import {Friends} from "./Friends/Friends";
import {UserProfileType} from "../../../redux/profileReducer";

type LeftColumnPropsType = {
    profile: UserProfileType | null
}
export function LeftColumn(props: LeftColumnPropsType) {
    return (
        <div className={S.content}>
            <Avatar profile={props.profile}/>
            <Friends />
        </div>
    );
}