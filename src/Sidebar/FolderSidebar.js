import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class FolderSidebar extends Component {
    render() {
        const folders = this.props.folders.map((folder, index) => {
            const folderClass = folder.id === this.props.selectedFolder ? "selected" : "folder";
            
            return(
                <li key={index} className={folderClass}>
                    <Link 
                        to={`/folder/${folder.id}`}
                        className="folder-link"
                        onClick={e => this.props.updateSelectedFolder(e.target.id)}
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
        );
    }
}

export default FolderSidebar;