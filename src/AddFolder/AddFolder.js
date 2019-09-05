import React, { Component } from 'react';

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

    handleSubmit(event) {
        event.preventDefault();
        
        const folderName = this.state.folderName.value;

        fetch('http://localhost:9090/folders', {
                method: 'POST',
                body: folderName,
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
        .then(console.log('New note successfully added'))
        .catch(error => {
            console.log(error)
        });
    }
    
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="folderName">Folder Name:</label>
                <input 
                    type="text"
                    name="folderName"
                    onChange={e => this.updateFolderName(e.target.value)}
                />
                <button
                    type="submit"
                    id="submitButton"
                >
                    Add Form
                </button>
            </form>
        );
    }
}

export default AddFolder;