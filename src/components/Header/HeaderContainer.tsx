import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                console.log(response);
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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
const dispatch: MapDispatchPropsType = {setUserData}

export default connect(mapStateToProps, dispatch)(HeaderContainer)