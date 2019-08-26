import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainSidebar extends Component {
    render() {
        console.log(this.props.folders);
        console.log(this.props.updateSelectedFolder);
        const folders = this.props.folders.map((folder, index) => {
            return (
                <li key={index} className="folder">
                    <Link 
                        to={`/folder/${folder.id}`}
                        onClick={e => this.props.updateSelectedFolder(e.target.text)}
                        className="folder-link"
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

export default MainSidebar;