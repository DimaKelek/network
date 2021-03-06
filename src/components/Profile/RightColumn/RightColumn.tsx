import React from "react";
import S from "./RightColumn.module.css"
import {Description} from "./Description/Description";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../store/profileReducer";

type RightColumnPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <div><MyPostsContainer/></div>
        </div>
    );
}