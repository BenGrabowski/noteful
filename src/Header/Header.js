import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './Header.css';

export default class Header extends Component {
    render() {     
            return (
                <NoteContext.Consumer>
                    {(context) => {
                        return (
                            <div className="Header">
                                <Link 
                                    to='/'
                                    onClick={e => {
                                        context.setSelectedFolder('');
                                        context.updateSelectedNote('');
                                        }
                                    }
                                >
                                    Noteful
                                </Link>
                            </div>
                        )
                    }}
                </NoteContext.Consumer>
            );
        }
    }
