import React from "react";
import S from "./Contact.module.css";

type ContactPropsType = {
    title: string
    contact: string
}
export const Contact: React.FC<ContactPropsType> = props => {
    return (
        <div className={S.contact_box}>
            <div className={S.title}>{props.title}</div>
            <div className={S.link}>
                {(props.contact || "Null").split('').map((l, i) => <span key={i}>{l}</span>)}
            </div>
        </div>
    )
}