import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    getProfile,
    getStatus,
    setUserProfile,
    updateStatus,
    UserProfileType
} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MainProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<MainProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userId
        if(!userID) {userID = "17320"}
        this.props.getProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
const dispatch: MapDispatchPropsType = {setUserProfile, getProfile, getStatus, updateStatus}

export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatch),
    withRouter,
    withAuthRedirect
)(ProfileContainer)