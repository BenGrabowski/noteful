import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotePage from './Notepage';
import AddFolder from '../AddFolder/AddFolder';
import AddFolderError from '../AddFolder/AddFolderError';
import AddNote from '../AddNote/AddNote';
import AddNoteError from '../AddNote/AddNoteError';
import './Main.css';

class Main extends Component {
    render() {
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
                        // component={AddFolder}
                        render={({ history }) => {
                            return <AddFolder
                                history={history}
                                rerender={() => this.props.rerender()}
                            />
                        }}
                    />
                </AddFolderError>

                <AddNoteError>
                    <Route
                        path='/addNote'
                        component={AddNote}
                    />
                </AddNoteError>
            </div>
        );
    }
}

export default Main; 
