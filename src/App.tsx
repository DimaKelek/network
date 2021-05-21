import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {

}

function App(props: AppPropsType) {
    const [url, setUrl] = useState<string>("SOCIAL NETWORK")
    return (
        <div className="app-wrapper">
            <Header url={url}/>
            <NavbarContainer setUrl={setUrl}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
