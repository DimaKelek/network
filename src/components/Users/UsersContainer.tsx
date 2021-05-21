import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, unfollowAC, UsersPageActionsType, UsersPageType} from "../../redux/usersReducer";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
   follow: (userID: string) => void
   unfollow: (userID: string) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: UsersPageActionsType) => void): MapDispatchPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        unfollow: (userID: string) => dispatch(unfollowAC(userID)),
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)