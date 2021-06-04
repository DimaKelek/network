import React from "react";
import {connect} from "react-redux";
import {UsersAPIContainer} from "./UsersAPIContainer";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC, setCheckedPageAC, setMaxRenderPageAC, setMinRenderPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageActionsType,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCheckedPage: (checkedPage: number) => void

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
        maxRenderPages: state.usersPage.maxRenderPages
    }
}
const mapDispatchToProps = (dispatch: (action: UsersPageActionsType) => void): MapDispatchPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        setCheckedPage: (checkedPage: number) => dispatch(setCheckedPageAC(checkedPage)),
        setMinRenderPage: (minRenderPage: number) => dispatch(setMinRenderPageAC(minRenderPage)),
        setMaxRenderPage: (maxRenderPage: number) => dispatch(setMaxRenderPageAC(maxRenderPage))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)