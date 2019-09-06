import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import { Link } from 'react-router-dom';
// import AddFolderError from './AddFolderError';

class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderName: {
              value: '',
              touched: false
            }
        }
    }

    updateFolderName(folderName) {
        this.setState({folderName: {value: folderName, touched: true}});
    }

    validateFolderName() {
        if(!this.state.folderName.value.length) {
            return 'Folder Name cannot be empty';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const folderName = {name: this.state.folderName.value};
        console.log(folderName);

        fetch('http://localhost:9090/folders', {
                method: 'POST',
                body: JSON.stringify(folderName),
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(response => {
            console.log('New folder sucessfully added')    
            this.props.history.push('/');

        })
        .catch(error => {
            console.log(error)
        });
    }
    
    render() {
        return (
            <form id="addFolderForm" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="folderName">Folder Name:</label>
                <input 
                    type="text"
                    name="folderName"
                    onChange={e => this.updateFolderName(e.target.value)}
                />
                {this.state.folderName.touched && 
                    (<ValidationError message={this.validateFolderName()} />)}
                <button
                    type="submit"
                    id="submitButton"
                >
                    Add Form
                </button>
                <Link to='/'>Cancel</Link>
            </form>
        );
    }
}

export default AddFolder;