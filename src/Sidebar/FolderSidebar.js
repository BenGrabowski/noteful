import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FolderSidebar extends Component {
    render() {
        console.log(this.props.folders);
        const folders = this.props.folders.map((folder, index) => {
            return(
                <li key={index} className="folder">
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
                <ul>
                    {folders}
                    <button>Add folder</button>
                </ul>
            </div>
        );
    }
}

export default FolderSidebar;