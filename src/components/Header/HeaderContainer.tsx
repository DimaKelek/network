import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuth, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";


type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
    getAuth: () => void
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

export default connect(mapStateToProps, dispatch)(HeaderContainer)