import React from "react";
import S from "./Users.module.css";
import {MyButton} from "../Decoration/MyButton/MyButton";
import {UserType} from "../../redux/usersReducer";

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
            u.followed ? props.unfollow(u.id) : props.follow(u.id)
        }
        return (
            <div key={u.id} className={`${S.user_box} ${props.isLoading ? S.blurScreen : null}`}>
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
            {props.isLoading && <div className={S.preloader}><img src={"https://goo.su/5SAB"} alt="#"/></div>}
            <h2 className={`${S.title} ${props.isLoading ? S.blurScreen : null}`}>Users</h2>
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