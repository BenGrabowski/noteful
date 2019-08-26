import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class MainPage extends Component {
    render() {
        const notes = this.props.notes.map((note, index) => {
            return (
                <li key={index}>
                    <Link 
                        to={`/note/${note.id}`}
                        className="note-link"
                    >
                        <h2>{note.name}</h2>
                    </Link>
                    <p>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
                </li>
            );
        });
        console.log(this.props);
        return (
            <div>
                <ul className="notes">
                    {notes}
                </ul>
            </div>
        );
    }
}

export default MainPage;