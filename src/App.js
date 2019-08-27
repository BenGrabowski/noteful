import React from 'react';
// import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import STORE from './STORE';
import './App.css';


class App extends React.Component {
  state = {
    folders: STORE["folders"],
    notes: STORE["notes"],
    selectedFolder: '',
    selectedNote: ''
  }
  
  setSelectedFolder = (id) => {
    console.log(id);
    this.setState({
      selectedFolder: id
    });
  }

  setSelectedNote = (id) => {
    console.log(id);
    this.setState({
      selectedNote: id
    });
  }
  
  render() {
    return (
      <div className='App'>
        <Header
          updateSelectedFolder={this.setSelectedFolder}
        />
        <main>
          <Sidebar 
            folders={this.state.folders}
            updateSelectedFolder={this.setSelectedFolder}  
          />
          <Main
            notes={this.state.notes}
            selectedFolder={this.state.selectedFolder}
            selectedNote={this.state.selectedNote}
            updatedSelectedNote={this.setSelectedNote}
          />
        </main>
      </div>
    );
  }
}

export default App;