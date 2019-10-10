import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import FolderSidebar from './FolderSidebar';
import NoteSidebar from './NoteSidebar';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path='/' 
                    component={MainSidebar} 
                />
                <Route 
                    path='/folder'
                    component={FolderSidebar}  
                />
                <Route 
                    path='/note/:noteId'
                    component={NoteSidebar}
                />
            </div>
        );
    }
}
