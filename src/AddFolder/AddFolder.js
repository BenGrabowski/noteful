import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import { Link } from 'react-router-dom';
import './AddFolder.css';
import PropTypes from 'prop-types';

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
        const folderName = {folder_name: this.state.folderName.value};
        console.log(folderName);
        if(folderName.name === "") {
            console.log('Empty folder name submitted');
        } else {
            fetch('http://localhost:8000/api/folders/addFolder', {
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
            console.log(response)
            this.props.updateFolders(response);    
            this.props.history.push('/');

        })
        .catch(error => {
            console.log(error)
        });
        }
    }
    
    render() {
        AddFolder.propTypes = {
            history: PropTypes.object.isRequired,
            updateFolders: PropTypes.func.isRequired
        };
        
        return (
            <form id="addFolderForm" onSubmit={e => this.handleSubmit(e)}>
                <fieldset>
                    <legend>Add Form</legend>
                <label htmlFor="folderName">Folder Name:</label>
                <input 
                    type="text"
                    name="folderName"
                    id="folderName"
                    onChange={e => this.updateFolderName(e.target.value)}
                />
                <br />

                {this.state.folderName.touched && 
                    (<ValidationError message={this.validateFolderName()} />)}
                
                <div className="addFolderControls">
                <button
                    type="submit"
                    id="addFolderButton"
                >
                    Add Folder
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
        );
    }
}

export default AddFolder;