import React, { Component, Fragment } from 'react';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class NoteSidebar extends Component {
    
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                   const currentNote = context.notes.find(note => note.id === parseInt(this.props.match.params.noteId));
                   console.log(currentNote)
                   const currentFolder = context.folders.find(folder => {
                    if(currentNote == null) {
                        return null
                    }
                    return folder.id === currentNote.folder});

                    let folderName = currentFolder !== undefined ? <p>{currentFolder.folder_name}</p>
                    : '';
                   
                    return (
                    <Fragment>
                         <button 
                            onClick={() => this.props.history.goBack()}
                            className="go-back"
                        >
                            Go back
                        </button>
                        <div>
                            {folderName}
                        </div>
                    </Fragment>                   
                   ) 
                }}
            </NoteContext.Consumer>
        );
    }
}

export default NoteSidebar;