import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import moment from 'moment';

class NotePage extends Component {
    deleteNote = (id) => {
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(response => console.log(response))
        .catch();
    }
    
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