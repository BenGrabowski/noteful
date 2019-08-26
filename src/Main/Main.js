import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotePage from './Notepage';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' render={() => <MainPage />} />
                <Route path='/folder' render={() => <MainPage />} />
                <Route path='/note' render={() => <NotePage />} />
            </div>
        );
    }
}

export default Main;
