import React from "react";
import S from "./Users.module.css";
import loader from "./../Decoration/Preloader/Preloader.module.css"
import {MyButton} from "../Decoration/MyButton/MyButton";
import {UserType} from "../../redux/usersReducer";
import {Preloader} from "../Decoration/Preloader/Preloader";
import {NavLink} from "react-router-dom";

type UsersPresentationType = {
    totalCount: number
    pageSize: number
    maxRenderPages: number
    minRenderPages: number
    checkedPage: number
    pageButtonClick: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    previousButtonClick: () => void
    nextButtonClick: (pageQuantity: number) => void
    isLoading: boolean
    setLoading: (isLoading: boolean) => void
    followInProgress: number[]
    setFollowInProgress: (userID: number, isLoading: boolean) => void
}

export function Users(props: UsersPresentationType) {
    const pageQuantity = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageQuantity; i++) {
        pages.push(i);
    }
    const pageButtons = pages.map((p, i) => {
        const pageCheckedStyle = `${S.pageButton} ${props.checkedPage === p && S.pageCheckedStyle}`
        if (p <= props.maxRenderPages && p > props.minRenderPages) {
            return (
                <div key={i} className={pageCheckedStyle} onClick={() => props.pageButtonClick(p)}>
                    <div className={S.number}>{p}</div>
                </div>
            );
        } else {
            return null
        }

    })
    const users = props.users.map(u => {
        const followCallback = () => {
            if(u.followed) {
                props.unfollow(u.id)
            } else {
                props.follow(u.id)
            }
        }
        return (
            <div key={u.id} className={`${S.user_box} ${props.isLoading ? loader.blurScreen : null}`}>
                <div className={S.avatar}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small ? u.photos.small : "https://goo.su/4zdi"} alt="#"/>
                    </NavLink>
                </div>
                <div className={S.info}>
                    <NavLink to={"/profile/" + u.id}>
                        <div className={S.name}>{u.name}</div>
                    </NavLink>
                    <div className={S.status}>{u.status ? u.status : "No status"}</div>
                    <div className={S.follow_button}>
                        <MyButton
                            disabled={props.followInProgress.some(id => id === u.id)}
                            onClick={followCallback}
                        >
                            {u.followed ? "Unfollow" : "Follow"}
                        </MyButton>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={S.users}>
            {props.isLoading && <Preloader/>}
            <h2 className={S.title}>Users</h2>
            {users}
            <div className={S.pageButtons_container}>
                <div className={`${S.pageButton} ${props.checkedPage === 1 ? S.invisibleButton : null}`}
                     onClick={props.previousButtonClick}
                >
                    <div className={S.number}>Back</div>
                </div>
                {pageButtons}
                <div
                    className={`${S.pageButton} ${props.checkedPage >= props.totalCount - 5 ? S.invisibleButton : null}`}
                    onClick={() => props.nextButtonClick(pageQuantity)}
                >
                    <div className={S.number}>Next</div>
                </div>
            </div>
        </div>
    );
}