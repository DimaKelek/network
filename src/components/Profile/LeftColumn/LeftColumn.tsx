import React from "react";
import { Avatar } from "./Avater/Avatar";
import S from "./LeftColumn.module.css"
import {Friends} from "./Friends/Friends";
import {UserProfileType} from "../../../store/profileReducer";

type LeftColumnPropsType = {
    profile: UserProfileType | null
}
export const LeftColumn: React.FC<LeftColumnPropsType> = React.memo(props => {
    const {profile, ...restProps} = props
    return (
        <div className={S.content}>
            <Avatar profile={profile}/>
            <Friends />
        </div>
    );
})