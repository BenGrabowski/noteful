import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class NoteSidebar extends Component {
    // static contextType = NoteContext;
    
    render() {
        console.log(this.props)
        return (
            <NoteContext.Consumer>
                {(context) => {
                   const currentNote = context.notes.filter(note => note.id === context.selectedNote);
                   const currentFolder = context.folders.filter(folder => {
                    console.log(currentNote[0].folderId)   
                    return folder.id === currentNote[0].folderId});
                   console.log(currentNote)
                   console.log(currentFolder)
                   return (
                    <div className="sidebar">
                    <button 
                            onClick={() => this.props.history.goBack()}
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