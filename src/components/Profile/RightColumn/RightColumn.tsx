import React from "react";
import S from "./RightColumn.module.css"
import {Description} from "./Description/Description";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../store/profileReducer";
import {UserType} from "../../../store/usersReducer";

type RightColumnPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    users: UserType[]
}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                users={props.users}
            />
            <MyPostsContainer />
        </div>
    );
}