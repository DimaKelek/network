import React from "react";
import S from "./RightColumn.module.css"
import {Description} from "./Description/Description";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type RightColumnPropsType = {

}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description />
            <MyPostsContainer />
        </div>
    );
}