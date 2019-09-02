import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import DeleteButton from '../DeleteButton/DeleteButton';
import moment from 'moment';

class NotePage extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {                    
                    console.log(this.props.match.params)
                    // const note = context.notes.filter(note => note.id === context.selectedNote)
                    const note = context.notes.find(note => note.id === this.props.match.params.noteId)
                    .map((note, index) => {
                        return (
                            <div key={index}>
                                <div className="note-box" >
                                    <h2>{note.name}</h2>
                                    <p>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
                                    <DeleteButton 
                                        // onClick={() => this.props.history.push('/')}
                                        id={note.id}
                                    />
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