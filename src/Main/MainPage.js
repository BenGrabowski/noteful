import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import NoteItem from '../NoteItem/NoteItem';

class MainPage extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                     let selectedFolder = context.selectedFolder
                     let  notes = undefined;
             
                     selectedFolder !== ''
                     ? notes = context.notes.filter(note => note.folder === selectedFolder).map((note, index) => {
                         return (
                            <NoteItem 
                                key={index}
                                index={index}
                                id={note.id}
                                name={note.note_name}
                                modified={note.modified}
                            />
                         ); 
                     })
                     : notes = context.notes.map((note, index) => {
                         return (
                            <NoteItem 
                                key={index}
                                index={index}
                                id={note.id}
                                name={note.note_name}
                                modified={note.modified} 
                            />
                         ); 
                     });
                    return (
                        <div className="notes-wrapper">
                            <ul className="notes">
                                {notes}
                            </ul>
                            <Link
                                    to="/addNote"
                                    className="addNoteButton"
                                >
                                    Add Note
                                </Link>
                        </div>
                    )
                }}
            </NoteContext.Consumer>
        );
    }
}

export default MainPage;