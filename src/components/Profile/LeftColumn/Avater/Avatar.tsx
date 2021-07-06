import React from "react";
import S from "./Avatar.module.css"
import {UserProfileType} from "../../../../store/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";

type AvatarPropsType = {
    profile: UserProfileType | null
}
export function Avatar(props: AvatarPropsType) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={S.avatar}>
            <img src={props.profile.photos.large ? props.profile.photos.large :"https://goo.su/4zdi"} alt="avatar"/>
        </div>
    );
}