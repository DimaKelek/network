import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {getProfile, getStatus, setUserProfile, updateStatus, UserProfileType
} from "../../store/profileReducer";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import { compose } from "redux";
import {UserType} from "../../store/usersReducer";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
    users: UserType[]
    authUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getProfile: (userID: number) => void
    getStatus: (userID: number) => void
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MainProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends PureComponent<MainProfilePropsType> {
    componentDidMount() {
        let userID: number | null = Number(this.props.match.params.userId)
        if(!userID) {
            userID = this.props.authUserId
            if(!userID) {
                this.props.history.push("/login")
            }
        }
        if (typeof userID === "number") {
            this.props.getProfile(userID)
            this.props.getStatus(userID)
        }

    }

    render() {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            users={this.props.users}
        />
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        users: state.usersPage.users,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
const dispatch: MapDispatchPropsType = {setUserProfile, getProfile, getStatus, updateStatus}

export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatch),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)