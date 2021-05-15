import React from "react";
import S from "./RightColumn.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import { Description } from "./Description/Description";
import { ActionsTypes } from "../../../redux/redux-store";
import { PostType } from "../../../redux/profileReducer";

type RightColumnPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description />
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}