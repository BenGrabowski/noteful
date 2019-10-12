import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UpdateNote extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
        }),
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    }

    static contextType = NoteContext;

    state = {
        error: null,
        id: 1,
        note_name: '',
        content: '',
        modified: '',
        folder: 1
    };

    componentDidMount() {
        console.log(this.props.match)
        const { noteId } = this.props.match.params
        fetch(`https://desolate-caverns-20141.herokuapp.com/api/notes/${noteId}`, {
            method: 'GET'
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
            }
            return res.json()
        })
        .then(responseData => {
            this.setState({
                id: responseData.id,
                note_name: responseData.note_name,
                content: responseData.content,
                modified: responseData.modified,
                folder: responseData.folder
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    handleChangeNoteName = e => {
        this.setState({ note_name: e.target.value })
    }

    handleChangeContent = e => {
        this.setState({ content: e.target.value })
    }

    handleChangeModified = e => {
        this.setState({ modified: new Date() })
    }

    hanldeChangeFolder = e => {
        this.setState({ folder: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { noteId } = this.props.match.params
        const { id, note_name, content, modified, folder } = this.state
        const newNote = { id, note_name, content, modified, folder }
        fetch(`https://desolate-caverns-20141.herokuapp.com/api/notes/${noteId}`, {
            method: 'PATCH',
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
            }
        })
        .then(() => {
            this.resetFields(newNote)
            this.context.handleUpdateNote(newNote)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            note_name: newFields.note_name || '',
            content: newFields.console || '',
            modified: newFields.modified || '',
            folder: newFields.folder || ''
        })
    }


render() {
    const { note_name, content, folder } = this.state
    return (
        <form id="updateNoteForm" onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                    <legend>Update Note</legend>
                        <label htmlFor="noteName">Name:</label>
                        <input 
                            type="text"
                            name="noteName"
                            id="noteName"
                            value={note_name}
                            onChange={e => this.handleChangeNoteName(e.target.value)}
                        />
                        <br />

                        <label htmlFor="noteContent">Content: </label>
                        <textarea
                            type="text"
                            name="noteContent"
                            id="noteContent"
                            value={content}
                            onChange={e => this.handleChangeContent(e.target.value)}
                        />
                        <br />

                        <label htmlFor="noteFolder">Folder:</label>
                        <select
                            name="noteFolder"
                            id="noteFolder"
                            value={folder}
                            onChange={e => this.handleChangeFolder(e.target.value)}
                        >
                            <option value="selectOne">Select One</option>
                            {this.context.folders.map((folder, index) => {
                                return (
                                    <option value={`${folder.id}`} key={index}>{folder.folder_name}</option>
                                )
                            })}
                        </select>                    
                        <br />

                        <div className="updateNoteControls">
                            <button
                                type="submit"
                                id="updateNoteButton"
                            >
                                Update Note
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

export default UpdateNote;