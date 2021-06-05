import React from "react";
import {connect} from "react-redux";
import {UsersAPIContainer} from "./UsersAPIContainer";
import {AppStateType} from "../../redux/redux-store";
import {follow, setCheckedPage, setLoading, setMaxRenderPage, setMinRenderPage, setTotalCount,
    setUsers, unfollow, UsersPageType, UserType} from "../../redux/usersReducer";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCheckedPage: (checkedPage: number) => void
    setLoading: (isLoading: boolean) => void

    setMinRenderPage: (minRenderPage: number) => void
    setMaxRenderPage: (maxRenderPage: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        checkedPage: state.usersPage.checkedPage,
        minRenderPages: state.usersPage.minRenderPages,
        maxRenderPages: state.usersPage.maxRenderPages,
        isLoading: state.usersPage.isLoading
    }
}

const dispatch: MapDispatchPropsType = {
    follow, unfollow, setUsers, setTotalCount,
    setCheckedPage, setMinRenderPage, setMaxRenderPage, setLoading
}

export const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIContainer)