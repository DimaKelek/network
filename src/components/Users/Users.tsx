import React from "react";
import { MyButton } from "../Decoration/MyButton/MyButton";
import S from "./Users.module.css"
import {UsersPagePropsType} from "./UsersContainer";

export function Users(props: UsersPagePropsType) {
    const users = props.users.map( u => {
        const followCallback = () => {
            u.followed ? props.unfollow(u.id) : props.follow(u.id)
        }
        return (
            <div className={S.user_box}>
                <div className={S.avatar}>
                    <img src={u.avatar} alt="#"/>
                </div>
                <div className={S.info}>
                    <div className={S.name}>{u.firstname}</div>
                    <div className={S.status}>{u.status}</div>
                    <div className={S.follow_button}>
                        <MyButton onClick={followCallback}>
                            {u.followed ? "Unfollow" : "Follow"}
                        </MyButton>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={S.users}>
            <h2 className={S.title}>Users</h2>
            {users}
        </div>
    );
}