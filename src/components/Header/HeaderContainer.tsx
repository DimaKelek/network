import React, {PureComponent} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../store/auth-reducer";
import {AppStateType} from "../../store/store";


type MapDispatchPropsType = {
    logout: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends PureComponent<AuthPropsType> {
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