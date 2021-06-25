import React from "react";
import S from "./News.module.css"
import {SuperInput} from "../Decoration/SuperInput/SuperInput";

type NewsPropsType = {

}

export function News(props: NewsPropsType) {
    return (
        <div className={S.news}>
            <SuperInput />
        </div>
    );
}