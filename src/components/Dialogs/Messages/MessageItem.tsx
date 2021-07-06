import React from "react";
import { MessageType } from "../../../store/dialogsReducer";
import S from "./MessageItem.module.css";

export function Message(props: MessageType) {
    return (
        <div className={S.message_box}>
            <img className={S.avatar} src="https://goo.su/4zdi" alt=""/>
            <div className={S.angle}/>
            <div className={S.message}>
                <div className={S.nickname}>//--Nickname--//</div>
                {props.message}
                <div className={S.time}>//-22:00-//</div>
            </div>
        </div>
    );
}