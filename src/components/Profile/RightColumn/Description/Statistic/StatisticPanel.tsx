import React from "react";
import S from "./StatisticPanel.module.css";

export const StatisticPanel: React.FC<any> = props => {
    return (
        <div className={S.statistic}>
            <div className={`${S.subs} ${S.box}`}>
                <div>0</div>
                <div>Subs</div>
            </div>
            <div className={`${S.news} ${S.box}`}>
                <div>0</div>
                <div>News</div>
            </div>
            <div className={`${S.photo} ${S.box}`}>
                <div>0</div>
                <div>Photos</div>
            </div>
            <div className={`${S.videos} ${S.box}`}>
                <div>0</div>
                <div>Videos</div>
            </div>
            <div className={`${S.friends} ${S.box}`}>
                <div>0</div>
                <div>Music</div>
            </div>
        </div>
    )
}