import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";


type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        usersAPI.authUser().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
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