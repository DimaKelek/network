import React from "react";
import S from "./Photos.module.css";

export const Photos: React.FC<any> = props => {
    return (
        <div className={S.photos}>
            <div className={S.title}>Photos</div>
            <div className={S.img_box}>
                <img src="https://goo.su/4zdi" alt="#"/>
                <img src="https://goo.su/4zdi" alt="#"/>
                <img src="https://goo.su/4zdi" alt="#"/>
                <img src="https://goo.su/4zdi" alt="#"/>
            </div>
        </div>
    )
}