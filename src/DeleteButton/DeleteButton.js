import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class DeleteButton extends Component { 
    static contextType = NoteContext;
    
    deleteNote = (id) => {
                        console.log('deleteNote ran')
                        fetch(`http://localhost:8000/notes/${id}`, {
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
                            console.log(this.props)
                            this.props.history.push('/')
                        })
                        .catch(error => {
                            console.log(error)
                        });
                    }
    
    render() {
        DeleteButton.propTypes = {
            id: PropTypes.number.isRequired,
        }
        
        return (
            <NoteContext.Consumer>
                {(context) => {
                     return (
                        <button onClick={() => {
                                this.deleteNote(this.props.id)
                                context.handleDeleteNote(this.props.id)
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