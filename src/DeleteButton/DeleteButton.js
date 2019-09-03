import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import { withRouter } from 'react-router-dom';

class DeleteButton extends Component { 
    static contextType = NoteContext;
    
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
                            this.context.handleDeleteNote(id)
                            // this.context.returnHome()
                            console.log(this.props)
                            this.props.history.push('/')
                        })
                        .catch(error => {
                            console.log(error)
                        });
                    }
    
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                     return (
                        <button onClick={() => {
                            this.deleteNote(this.props.id)
                            context.handleDeleteNote(this.props.id)
                            // this.props.returnHome()
                            }
                        }>
                            Delete Note
                        </button>
                     );
                }}
            </NoteContext.Consumer>
        );
    }
}

export default withRouter(DeleteButton);