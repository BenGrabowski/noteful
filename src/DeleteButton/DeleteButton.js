import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class DeleteButton extends Component { 
    deleteNote = (id) => {
        console.log('deleteNote ran')
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(response => console.log(response))
        .catch(error => {
            console.log(error)
        });
    }
    
    render() {
        return (
            <button onClick={() => this.deleteNote(this.props.id)}>
                Delete Note
            </button>
        );
    }
}

export default DeleteButton;