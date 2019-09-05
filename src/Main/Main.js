import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotePage from './Notepage';
import AddFolder from '../AddFolder/AddFolder';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Route 
                    exact path='/' 
                    component={MainPage}
                />
                <Route 
                    path='/folder' 
                    component={MainPage} 
                />
                <Route 
                    path='/note/:noteId' 
                    component={NotePage} 
                />
                <Route
                    path='/addFolder'
                    component={AddFolder}
                />
            </div>
        );
    }
}

export default Main;
