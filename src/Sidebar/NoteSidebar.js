import React, { Component } from 'react';

class NoteSidebar extends Component {
    render() {
        console.log(this.props.folders);
        const folders = this.props.folders.map((folder, index) => {
            return <li key={index}>{folder.name}</li>
        });
        return (
            <div className="sidebar">
                <ul>
                    {folders}
                </ul>
            </div>
        );
    }
}

export default NoteSidebar;