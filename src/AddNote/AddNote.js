import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import { Link } from 'react-router-dom';
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
            name: this.state.noteName.value,
            content: this.state.noteContent.value,
            folder: this.state.noteFolder.value
        };
        console.log(note);

        fetch('http://localhost:9090/notes', {
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
    
    render() {
        return (
                <form id="addNoteForm" onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                    <legend>Add Note</legend>
                        <label htmlFor="noteName">Name:</label>
                        <input 
                            type="text"
                            name="noteName"
                            onChange={e => this.updateNoteName(e.target.value)}
                        />
                        {this.state.noteName.touched && 
                            (<ValidationError message={this.validateNoteName()} />)}
                        <br />

                        <label htmlFor="noteContent">Content: </label>
                        <textarea
                            type="text"
                            name="noteContent"
                            onChange={e => this.updateNoteContent(e.target.value)}
                        />
                        {this.state.noteContent.touched && 
                            (<ValidationError message={this.validateNoteContent()} />)}
                        <br />

                        <label htmlFor="noteFolder">Folder:</label>
                        <select
                            name="noteFolder"
                            onChange={e => this.updateNoteFolder(e.target.value)}
                        >
                            <option value="selectOne">Select One</option>
                            <option value="b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1">Important</option>
                            <option value="b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1">Super</option>
                            <option value="b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1">Spangley</option>
                        </select>                    
                        {this.state.noteContent.touched && 
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
                </form>
        )
    }
}

export default AddNote;