import React from 'react';
import S from './Profile.module.css';
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {LeftColumn} from "./LeftColumn/LeftColumn";
import {RightColumn} from './RightColumn/RightColumn';
import {UserProfileType} from "../../store/profileReducer";

type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    updatePhotos: (file: File) => void
    isOwner: boolean
}

export const Profile: React.FC<ProfilePropsType> = props => {
    const {profile, isOwner} = props

    return (
        <div className={S.profile}>
            <ProfileHeader />
            <div className={S.content}>
                <div className={S.left}>
                    <LeftColumn profile={profile} isOwner={isOwner} updatePhotos={props.updatePhotos}/>
                </div>
                <div className={S.right}>
                    <RightColumn profile={props.profile} status={props.status}
                                 updateStatus={props.updateStatus} isOwner={isOwner}/>
                </div>
            </div>
        </div>
    );
}