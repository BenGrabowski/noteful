import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import moment from 'moment';

class NotePage extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {                    
                    const note = context.notes.filter(note => note.id === context.selectedNote)
                    .map((note, index) => {
                        return (
                            <div key={index}>
                                <div className="note-box" >
                                    <h2>{note.name}</h2>
                                    <p>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
                                    <button 
                                        onClick={() => context.deleteNote(note.id)}
                                    >
                                        Delete Note
                                    </button>
                                </div>
                                <p>{note.content}</p>
                            </div>
                        );
                    });
                    return (
                        <div>
                            {note}
                        </div>
                    )
                }}
            </NoteContext.Consumer>
            
        );
    }
}

export default NotePage;