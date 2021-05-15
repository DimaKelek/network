import React from 'react';
import S from './Profile.module.css';
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {LeftColumn} from "./LeftColumn/LeftColumn";
import {RightColumn} from './RightColumn/RightColumn';
import {ProfilePageType} from "../../redux/profileReducer";
import {ActionsTypes} from "../../redux/redux-store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
export function Profile(props: ProfilePropsType) {
    const posts = props.profilePage.posts;
    const newPostText = props.profilePage.newPostText;
    const dispatch = props.dispatch
    return (
        <div className={S.content}>
            <ProfileHeader />
            <LeftColumn />
            <RightColumn
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    );
}