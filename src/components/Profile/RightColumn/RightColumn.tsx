import React from "react";
import S from "./RightColumn.module.css"
import {Description} from "./Description/Description";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../../redux/redux-store";

type RightColumnPropsType = {
    store: StoreType
}

export function RightColumn(props: RightColumnPropsType) {
    return (
        <div className={S.content}>
            <Description />
            <MyPostsContainer store={props.store} />
        </div>
    );
}