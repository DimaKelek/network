import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, setName, setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
}

type MapDispatchPropsType = {
    setName: (fullName: string) => void
    setUserProfile: (profile: UserProfileType) => void
    getProfile: (userID: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MainProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<MainProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userId
        if(!userID) {userID = "2"}
        this.props.getProfile(userID)
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
const dispatch: MapDispatchPropsType = {setName, setUserProfile, getProfile}

export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatch),
    withRouter,
    withAuthRedirect
)(ProfileContainer)