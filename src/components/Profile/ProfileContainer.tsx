import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setName, setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";

type MapStatePropsType = {
    profile: UserProfileType
}
type MapDispatchPropsType = {
    setName: (fullName: string) => void
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, dispatch)(ProfileContainer)