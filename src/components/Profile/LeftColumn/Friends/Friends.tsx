import React from "react";
import S from "./Friends.module.css"

export const Friends: React.FC<any> = React.memo(props => {
    return (
        <div className={S.friends}>
            Friends
        </div>
    );
})