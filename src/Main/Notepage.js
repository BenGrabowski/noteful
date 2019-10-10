import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import NoteItem from '../NoteItem/NoteItem';

class NotePage extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {                    
                    console.log(this.props.match.params)
                    const note = context.notes.filter(note => note.id === this.props.match.params.noteId)
                    .map((note, index) => {
                        return (
                            <div key={index}>
                                <NoteItem 
                                    name={note.note_name}
                                    id={note.id}
                                />
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