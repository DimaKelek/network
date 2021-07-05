import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";


type MapDispatchPropsType = {
    logout: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const dispatch: MapDispatchPropsType = {logout}

export default connect(mapStateToProps, dispatch)(HeaderContainer)