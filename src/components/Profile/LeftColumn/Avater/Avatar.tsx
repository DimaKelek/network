import React, {ChangeEvent} from "react";
import S from "./Avatar.module.css"
import {UserProfileType} from "../../../../store/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";

type AvatarPropsType = {
    profile: UserProfileType | null
    isOwner: boolean
    updatePhotos: (file: File) => void
}
export const Avatar: React.FC<AvatarPropsType> = React.memo((props) => {
    const {profile, isOwner, updatePhotos} = props
    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            debugger
            updatePhotos(e.target.files[0])
        }
    }

    if(!profile) {
        return <Preloader />
    }
    return (
        <div className={S.avatar}>
            <img src={profile.photos.large || "https://goo.su/4zdi"} alt="avatar"/>
            {isOwner && <div className={S.changeAvatar_container}>
                <input type="file" id="input_file"
                       className={S.input_file} onChange={onChangeAvatar}/>
                <label className={S.changeAvatar} htmlFor="input_file">Edit</label>
            </div>}
        </div>
    );
})