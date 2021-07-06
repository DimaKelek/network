import {UserType} from "../../../store/usersReducer";
import React from "react";
import S from "./User.module.css";
import loader from "../../Decoration/Preloader/Preloader.module.css";
import {NavLink} from "react-router-dom";
import {MyButton} from "../../Decoration/MyButton/MyButton";

type UserPropsType = {
    user: UserType
    isLoading: boolean
    followInProgress: number[]
    unfollow: (id: number) => void
    follow: (id: number) => void
}
export const User: React.FC<UserPropsType> = props => {
    const {user, isLoading, followInProgress, unfollow, follow, ...restProps} = props

    const followCallback = () => {
        user.followed ? unfollow(user.id) : follow(user.id)
    }
    return (
        <div className={`${S.user_box} ${isLoading ? loader.blurScreen : null}`}>
            <div className={S.avatar}>
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small || "https://goo.su/4zdi"} alt="#"/>
                </NavLink>
            </div>
            <div className={S.info}>
                <NavLink to={"/profile/" + user.id}>
                    <div className={S.name}>{user.name}</div>
                </NavLink>
                <div className={S.status}>{user.status || "No status"}</div>
                <div className={S.follow_button}>
                    <MyButton
                        disabled={followInProgress.some(id => id === user.id)}
                        onClick={followCallback}
                    >
                        {user.followed ? "Unfollow" : "Follow"}
                    </MyButton>
                </div>
            </div>
        </div>
    )
}