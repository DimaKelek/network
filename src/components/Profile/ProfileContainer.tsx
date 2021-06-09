import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setName, setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
}
type MapDispatchPropsType = {
    setName: (fullName: string) => void
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MainProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<MainProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userId
        if(!userID) {
            userID = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const dispatch: MapDispatchPropsType = {setName, setUserProfile}

const WithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, dispatch)(WithRouterContainer)