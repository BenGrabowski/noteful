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
                //    const currentNote = context.notes.filter(note => note.id === context.selectedNote);
                   const currentNote = context.notes.find(note => note.id === this.props.match.params.noteId);
                   console.log(currentNote)
                   const currentFolder = context.folders.find(folder => {
                    // console.log(currentNote[0].folderId)
                    console.log(this.props.match.params)
                    console.log(context.notes)
                    // console.log(folder.id, currentNote[0].folderId)   
                    return folder.id === currentNote.folderId});
                //    console.log(currentNote[0].folderId)
                //    console.log(currentFolder)
                   return (
                    <div className="sidebar">
                    <button 
                            onClick={() => this.props.history.goBack()}
                            className="go-back"
                        >
                            Go back
                        </button>
                    <p>{currentFolder.name}</p>
                    </div>
                   ) 
                }}
            </NoteContext.Consumer>
        );
    }
}

export default NoteSidebar;