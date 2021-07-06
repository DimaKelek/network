import React from "react";
import S from "./ProfileHeader.module.css"

export const ProfileHeader: React.FC<any> = React.memo(props => {
    return (
        <div className={S.header_box}>
            <img src="https://goo.su/4vY0" alt=""/>
        </div>
    );
})