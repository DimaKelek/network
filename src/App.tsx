import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from "./components/Users/UsersContainer";
import {LoginContainer} from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initApp} from "./redux/app-reducer";

type AppPropsType = MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initApp()
    }
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    initApp: () => void
}

const dispatch: MapDispatchToPropsType = {initApp}
export default compose<React.ComponentType>(withRouter, connect(null, dispatch))(App);
