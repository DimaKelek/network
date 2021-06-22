import React from 'react';
import S from './Profile.module.css';
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {LeftColumn} from "./LeftColumn/LeftColumn";
import {RightColumn} from './RightColumn/RightColumn';
import {UserProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: UserProfileType | null
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={S.content}>
            <ProfileHeader />
            <LeftColumn profile={props.profile}/>
            <RightColumn
                profile={props.profile}
            />
        </div>
    );
}