import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class MainSidebar extends Component {
    render() {
        console.log(this.props.folders);
        console.log(this.props.updateSelectedFolder);
        const folders = this.props.folders.map((folder, index) => {
            return (
                <li key={index} className="folder">
                    <Link 
                        to={`/folder/${folder.id}`}
                        onClick={e => this.props.updateSelectedFolder(e.target.id)}
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
        );
    }
}

export default MainSidebar;