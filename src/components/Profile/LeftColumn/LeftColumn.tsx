import React from "react";
import { Avatar } from "./Avater/Avatar";
import S from "./LeftColumn.module.css"
import {Friends} from "./Friends/Friends";
import {UserProfileType} from "../../../store/profileReducer";

type LeftColumnPropsType = {
    profile: UserProfileType | null
    isOwner: boolean
    updatePhotos: (file: File) => void
}
export const LeftColumn: React.FC<LeftColumnPropsType> = React.memo(props => {
    const {profile, isOwner} = props
    return (
        <div className={S.content}>
            <Avatar profile={profile} isOwner={isOwner} updatePhotos={props.updatePhotos}/>
            <Friends />
        </div>
    );
})