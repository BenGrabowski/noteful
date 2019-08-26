import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotePage from './Notepage';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path='/' 
                    render={() => 
                        <MainPage 
                            notes={this.props.notes} 
                        />
                    }
                />
                <Route 
                    path='/folder' 
                    render={() => 
                        <MainPage
                            notes={this.props.notes}
                        />
                    } 
                />
                <Route 
                    path='/note' 
                    render={() => 
                        <NotePage
                            notes={this.props.notes}
                        />
                    } 
                />
            </div>
        );
    }
}

export default Main;
