import React from 'react';
import S from './Profile.module.css';
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {LeftColumn} from "./LeftColumn/LeftColumn";
import {RightColumn} from './RightColumn/RightColumn';

type ProfilePropsType = {

}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={S.content}>
            <ProfileHeader />
            <LeftColumn />
            <RightColumn />
        </div>
    );
}