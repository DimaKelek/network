import React from "react";
import S from "./Preloader.module.css";

export function Preloader() {
    return (
        <div className={S.preloader}>
            <img src={"https://goo.su/5SAB"} alt="preloader"/>
        </div>
    )
}
