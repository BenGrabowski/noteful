import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteContext from '../NoteContext';
import './AddNote.css'

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: {
              value: '',
              touched: false
            },
            noteContent: {
                value: '',
                touched: false
            },
            noteFolder: {
                value: '',
                touched: false
            }
        }
    }

    updateNoteName(noteName) {
        this.setState({noteName: {value: noteName, touched: true}});
    }

    updateNoteContent(noteContent) {
        this.setState({noteContent: {value: noteContent, touched: true}});        
    }

    updateNoteFolder(noteFolder) {
        this.setState({noteFolder: {value: noteFolder, touched: true}});        
    }

    validateNoteName() {
        if(!this.state.noteName.value.length) {
            return 'Note name cannot be empty';
        }
    }

    validateNoteContent() {
        if(!this.state.noteContent.value.length) {
            return 'Note content cannot be empty';
        }
    }

    validateNoteFolder() {
        if(this.state.noteFolder.value === "selectOne") {
            return 'Must select a folder';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const note = {
            note_name: this.state.noteName.value,
            content: this.state.noteContent.value,
            folder: this.state.noteFolder.value,
            modified: new Date(),
        };
        console.log(note);
        if(note.name === "" || (note.folderId === "selectOne" || note.folderId === "")) {
            console.log('Note name is empty or no folder selected');
        } else {
            fetch('http://localhost:8000/api/notes/addNote', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            } return response.json()
        })
        .then(response => {
            console.log('Note added successfully');
            this.props.updateNotes(response);
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error)
        })
        }
    }
    
    render() {
        AddNote.propTypes = {
            history: PropTypes.object.isRequired,
            updateNotes: PropTypes.func.isRequired
        };
        
        return (
            <NoteContext.Consumer>
                {(context) => {
                    return (
                    <form id="addNoteForm" onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                    <legend>Add Note</legend>
                        <label htmlFor="noteName">Name:</label>
                        <input 
                            type="text"
                            name="noteName"
                            id="noteName"
                            onChange={e => this.updateNoteName(e.target.value)}
                        />
                        {this.state.noteName.touched && 
                            (<ValidationError message={this.validateNoteName()} />)}
                        <br />

                        <label htmlFor="noteContent">Content: </label>
                        <textarea
                            type="text"
                            name="noteContent"
                            id="noteContent"
                            onChange={e => this.updateNoteContent(e.target.value)}
                        />
                        {this.state.noteContent.touched && 
                            (<ValidationError message={this.validateNoteContent()} />)}
                        <br />

                        <label htmlFor="noteFolder">Folder:</label>
                        <select
                            name="noteFolder"
                            id="noteFolder"
                            onChange={e => this.updateNoteFolder(e.target.value)}
                        >
                            <option value="selectOne">Select One</option>
                            {context.folders.map((folder, index) => {
                                return (
                                    <option value={`${folder.id}`} key={index}>{folder.folder_name}</option>
                                )
                            })}
                        </select>                    
                        {this.state.noteFolder.touched && 
                            (<ValidationError message={this.validateNoteFolder()} />)}
                        <br />

                        <div className="addNoteControls">
                            <button
                                type="submit"
                                id="addNoteButton"
                            >
                                Add Note
                            </button>
                            <Link 
                                to='/'
                                className="cancel"
                            >
                                Cancel
                            </Link>
                        </div>
                    </fieldset>
                    </form>)}
                }
            </NoteContext.Consumer>

        )
    }              
}
   


export default AddNote;