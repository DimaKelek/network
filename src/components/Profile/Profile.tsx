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
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={S.content}>
            <ProfileHeader />
            <LeftColumn profile={props.profile}/>
            <RightColumn
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </div>
    );
}