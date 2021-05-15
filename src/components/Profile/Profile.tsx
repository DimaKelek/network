import React from 'react';
import S from './Profile.module.css';
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {LeftColumn} from "./LeftColumn/LeftColumn";
import {RightColumn} from './RightColumn/RightColumn';
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: StoreType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={S.content}>
            <ProfileHeader />
            <LeftColumn />
            <RightColumn store={props.store}/>
        </div>
    );
}