import React, { Component, Fragment } from 'react';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class NoteSidebar extends Component {
    
    render() {
        console.log(this.props)
        return (
            <NoteContext.Consumer>
                {(context) => {
                   const currentNote = context.notes.find(note => note.id === this.props.match.params.noteId);
                   console.log(currentNote)
                   const currentFolder = context.folders.find(folder => {
                    console.log(this.props.match.params)
                    console.log(context.notes)
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