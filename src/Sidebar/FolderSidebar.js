import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class FolderSidebar extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                    const folders = context.folders.map((folder, index) => {
                        const folderClass = folder.id === context.selectedFolder ? "selected" : "folder";
                        
                        return(
                            <li key={index} className={folderClass}>
                                <Link 
                                    to={`/folder/${folder.id}`}
                                    className="folder-link"
                                    onClick={e => context.updateSelectedFolder(e.target.id)}
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
                                <Link 
                                        className="add-folder"
                                        to="/addFolder"
                                    >
                                        Add folder
                                    </Link>
                            </ul>
                        </div>
                    )
                }}
            </NoteContext.Consumer>
        );
    }
}

export default FolderSidebar;