import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class NoteSidebar extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                   const currentNote = context.notes.filter(note => note.id === context.selectedNote);
                   const currentFolder = context.folders.filter(folder => folder.id === currentNote[0].folderId);
                   return (
                    <div className="sidebar">
                    <button 
                            onClick={this.props.value.history.goBack()}
                            className="go-back"
                        >
                            Go back
                        </button>
                    <p>{currentFolder[0].name}</p>
                    </div>
                   ) 
                }}
            </NoteContext.Consumer>
        );
    }
}

export default NoteSidebar;