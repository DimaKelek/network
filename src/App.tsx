import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootType } from './redux/redux-store';

type AppPropsType = {
    state: RootType
    dispatch: (action: ActionsTypes) => void
}
function App(props: AppPropsType) {
    const profilePage = props.state.profilePage;
    const dialogsPage = props.state.dialogsPage;
    const navbarData = props.state.navbar;

    const dispatch = props.dispatch;
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbar={navbarData}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    dialogsPage={dialogsPage}
                    dispatch={dispatch}
                />
                }/>
                <Route path="/profile" render={() => <Profile
                    profilePage={profilePage}
                    dispatch={dispatch}
                />
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
