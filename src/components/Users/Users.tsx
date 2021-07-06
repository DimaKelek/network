import React from "react";
import S from "./Users.module.css";
import {UserType} from "../../store/usersReducer";
import {Preloader} from "../Decoration/Preloader/Preloader";
import {User} from "./User/User";
import {Paginator} from "../Decoration/Paginator/Paginator";

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

export const Users: React.FC<UsersPresentationType> = props => {
    const {users, totalCount, pageSize, checkedPage, maxRenderPages, minRenderPages,
        pageButtonClick, previousButtonClick, nextButtonClick, isLoading, unfollow,
        followInProgress, follow, ...restProps} = props

    const userItems = users.map(u => {
        return (
            <User key={u.id} user={u} isLoading={isLoading}
                  followInProgress={followInProgress}
                  unfollow={unfollow} follow={follow}
            />
        )
    })
    return (
        <div className={S.users}>
            {props.isLoading && <Preloader/>}
            <h2 className={S.title}>Users</h2>
            {userItems}
            <Paginator
                totalCount={totalCount}
                pageSize={pageSize}
                checkedPage={checkedPage}
                maxRenderPages={maxRenderPages}
                minRenderPages={minRenderPages}
                pageButtonClick={pageButtonClick}
                previousButtonClick={previousButtonClick}
                nextButtonClick={nextButtonClick}
            />
        </div>
    );
}