import React from "react";
import S from "./Avatar.module.css"
import {UserProfileType} from "../../../../redux/profileReducer";

type AvatarPropsType = {
    profile: UserProfileType
}
export function Avatar(props: AvatarPropsType) {
    return (
        <div className={S.avatar}>
            <img src={props.profile.photos.large ? props.profile.photos.large :"https://goo.su/4zdi"} alt="avatar"/>
        </div>
    );
}