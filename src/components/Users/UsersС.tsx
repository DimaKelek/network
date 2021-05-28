import React from "react";
import { MyButton } from "../Decoration/MyButton/MyButton";
import S from "./Users.module.css"
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";

export class UsersC extends React.Component<UsersPagePropsType> {

    getUsers = () => {
        if(this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render () {
        return (
            <div className={S.users}>
                <MyButton onClick={this.getUsers}>Get users</MyButton>
                <h2 className={S.title}>Users</h2>
                {this.props.users.map( u => {
                    const followCallback = () => {
                        u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)
                    }
                    return (
                        <div key={u.id} className={S.user_box}>
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
                })}
            </div>
        );
    }

}