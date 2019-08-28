import React, { Component } from 'react';
import './Sidebar.css';

class NoteSidebar extends Component {
    render() {
        const currentNote = this.props.notes.filter(note => note.id === this.props.selectedNote);
        console.log(currentNote);

        const currentFolder = this.props.folders.filter(folder => folder.id === currentNote[0].folderId);
        console.log(currentFolder);
        return (
            <div className="sidebar">
               <button 
                    onClick={this.props.goBack}
                    className="go-back"
                >
                    Go back
                </button>
               <p>{currentFolder[0].name}</p>
            </div>
        );
    }
}

export default NoteSidebar;