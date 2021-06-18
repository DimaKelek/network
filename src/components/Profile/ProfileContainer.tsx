import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, setName, setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
    isAuth: boolean
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
        if(!this.props.isAuth) {
            return <Redirect to="/login"/>
        }
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const dispatch: MapDispatchPropsType = {setName, setUserProfile, getProfile}

export default connect(mapStateToProps, dispatch)(withRouter(ProfileContainer))