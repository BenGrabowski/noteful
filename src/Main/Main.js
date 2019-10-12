import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotePage from './Notepage';
import AddFolder from '../AddFolder/AddFolder';
import AddFolderError from '../AddFolder/AddFolderError';
import AddNote from '../AddNote/AddNote';
import AddNoteError from '../AddNote/AddNoteError';
import UpdateNote from '../UpdateNote/UpdateNote';
import PropTypes from 'prop-types';
import './Main.css';

class Main extends Component {
    render() {
        Main.propTypes = {
            updateFolders: PropTypes.func.isRequired,
            updateNotes: PropTypes.func.isRequired
        };

        return (
            <div className="Main">
                <Route 
                    exact path='/' 
                    component={MainPage}
                />
                <Route 
                    path='/folder' 
                    component={MainPage} 
                />
                <Route 
                    path='/note/:noteId' 
                    component={NotePage} 
                />
                <AddFolderError>
                    <Route
                        path='/addFolder'
                        render={({ history }) => {
                            return <AddFolder
                                history={history}
                                updateFolders={this.props.updateFolders}
                            />
                        }}
                    />
                </AddFolderError>

                <AddNoteError>
                    <Route
                        path='/addNote'
                        render={( {history }) => {
                            return <AddNote
                                history={history}
                                updateNotes={this.props.updateNotes}
                            />
                        }}
                    />
                </AddNoteError>
                <Route
                    path='/updateNote/:noteId'
                    // render={( {history} ) => {
                    //     return <UpdateNote
                    //         history={history}
                    //         updateNotes={this.props.handleUpdateNote}
                    //     />
                    // }}
                    component={UpdateNote}
                />
            </div>
        );
    }
}

export default Main; 
