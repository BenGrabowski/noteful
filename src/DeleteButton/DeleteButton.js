import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import { isContext } from 'vm';

class DeleteButton extends Component { 
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
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
                        .then(response => {
                            console.log(response)
                            context.handleDeleteNote(id)
                        })
                        .catch(error => {
                            console.log(error)
                        });
                    }  
                    
                    <button onClick={() => this.deleteNote(this.props.id)}>
                        Delete Note
                    </button>
                }}
            </NoteContext.Consumer>
        );
    }
}

export default DeleteButton;