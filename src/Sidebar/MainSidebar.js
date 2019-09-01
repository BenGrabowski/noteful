import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class MainSidebar extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                  const folders = context.folders.map((folder, index) => {
                    return (
                        <li key={index} className="folder">
                            <Link 
                                to={`/folder/${folder.id}`}
                                onClick={e => context.updateSelectedFolder(e.target.id)}
                                className="folder-link"
                                id={folder.id}
                            >
                                {folder.name}
                            </Link>
                        </li>
                    );
                });      
                        return (
                            <div className="sidebar">
                                <ul className="sidebar-list">
                                    {folders}
                                    <button className="add-folder">Add folder</button>
                                </ul>
                            </div>
                        )
                    }
                }
            </NoteContext.Consumer>
        );
    }
}

export default MainSidebar;