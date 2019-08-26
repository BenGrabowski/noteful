import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import FolderSidebar from './FolderSidebar';
import NoteSidebar from './NoteSidebar';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path='/' 
                    render={() => 
                        <MainSidebar 
                            folders={this.props.folders}
                            updateSelectedFolder={this.props.updateSelectedFolder} 
                        />
                    } 
                />
                <Route 
                    path='/folder'
                    render={() => 
                        <FolderSidebar
                            folders={this.props.folders}
                            updateSelectedFolder={this.props.updateSelectedFolder} 
                        />
                    }  
                />
                <Route 
                    path='/note'
                    render={() =>
                        <NoteSidebar />
                    }
                />
            </div>
        );
    }
}

export default Sidebar;