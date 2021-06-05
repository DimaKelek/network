import React from "react";
import S from "./RightColumn.module.css"
import {Description} from "./Description/Description";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../redux/profileReducer";

type RightColumnPropsType = {
    profile: UserProfileType | null
}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}