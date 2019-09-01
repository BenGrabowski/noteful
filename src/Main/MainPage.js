import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import moment from 'moment';

class MainPage extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                     let selectedFolder = context.selectedFolder
                     let  notes = undefined;
             
                     selectedFolder !== ''
                     ? notes = context.notes.filter(note => note.folderId === selectedFolder).map((note, index) => {
                         return (
                             <li 
                                 key={index}
                                 className="note-item">
                                 <Link 
                                     to={`/note/${note.id}`}
                                     className="note-link"
                                     onClick={e => context.updateSelectedNote(note.id)}
                                 >
                                     <h2>{note.name}</h2>
                                 </Link>
                                 <p>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
                                 <button>Delete</button>
                             </li>
                         ); 
                     })
                     : notes = context.notes.map((note, index) => {
                         return (
                             <li key={index}>
                                 <Link 
                                     to={`/note/${note.id}`}
                                     className="note-link"
                                     onClick={e => context.updateSelectedNote(note.id)}
                                 >
                                     <h2>{note.name}</h2>
                                 </Link>
                                 <p>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
                                 <button>Delete</button>
                             </li>
                         ); 
                     });
                    return (
                        <div className="notes-wrapper">
                            <ul className="notes">
                                {notes}
                            </ul>
                        </div>
                    )
                }}

            </NoteContext.Consumer>
        );
    }
}

export default MainPage;