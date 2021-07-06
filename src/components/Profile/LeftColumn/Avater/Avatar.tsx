import React from "react";
import S from "./Avatar.module.css"
import {UserProfileType} from "../../../../store/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";

type AvatarPropsType = {
    profile: UserProfileType | null
}
export const Avatar: React.FC<AvatarPropsType> = React.memo((props) => {
    const {profile, ...restProps} = props

    if(!profile) {
        return <Preloader />
    }
    return (
        <div className={S.avatar}>
            <img src={profile.photos.large || "https://goo.su/4zdi"} alt="avatar"/>
        </div>
    );
})