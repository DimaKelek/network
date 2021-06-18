import React, {Dispatch} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthActionType, getAuth, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
    getAuth: () => (dispatch: Dispatch<AuthActionType>) => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuth()
    }

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
const dispatch: MapDispatchPropsType = {setUserData, getAuth}

// @ts-ignore
export default connect(mapStateToProps, dispatch)(HeaderContainer)