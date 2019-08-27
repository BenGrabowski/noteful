import React, { Component } from 'react';
import moment from 'moment';

class NotePage extends Component {
    render() {
        console.log(this.props.notes);
        const note = this.props.notes.filter(note => note.id === this.props.selectedNote)
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
        );
    }
}

export default NotePage;