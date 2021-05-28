import React from "react";
import { MyButton } from "../Decoration/MyButton/MyButton";
import S from "./Users.module.css"
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";

export function Users(props: UsersPagePropsType) {

    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    const users = props.users.map( u => {
        const followCallback = () => {
            u.followed ? props.unfollow(u.id) : props.follow(u.id)
        }
        return (
            <div className={S.user_box}>
                <div className={S.avatar}>
                    <img src={u.photos.small ? u.photos.small : "https://goo.su/4zdi"} alt="#"/>
                </div>
                <div className={S.info}>
                    <div className={S.name}>{u.name}</div>
                    <div className={S.status}>{u.status ? u.status : "No status"}</div>
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