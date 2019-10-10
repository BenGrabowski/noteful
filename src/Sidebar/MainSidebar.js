import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class MainSidebar extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => {
                  console.log(context)
                  const folders = context.folders.map((folder, index) => {
                    console.log(folder)
                    return (
                        <li key={index} className="folder">
                            <Link 
                                to={`/folder/${folder.id}`}
                                onClick={e => context.setSelectedFolder(e.target.id)}
                                className="folder-link"
                                id={folder.id}
                            >
                                {folder.folder_name}
                            </Link>
                        </li>
                    );
                });   
                        return (
                            // <div className="sidebar">
                            <Fragment>
                                 <ul className="sidebar-list">
                                    {folders}
                                </ul>
                                <Link 
                                        className="add-folder"
                                        to="/addFolder"
                                    >
                                        Add folder
                                    </Link>
                            </Fragment>
                               
                            // </div>
                        )
                    }
                }
            </NoteContext.Consumer>
        );
    }
}

export default MainSidebar;