import React from 'react';
// import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
// import STORE from './STORE';
import NoteContext from './NoteContext';
import './App.css';


class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    selectedFolder: '',
    selectedNote: '',
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

  deleteNote = (id) => {
    console.log(id)
    fetch(`http://localhost:9090/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(response => {
        if(!response.ok) {
            return response.json().then(error => {
                throw error
            })
        }
        return response.json()
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log(error)
    });
}

  componentDidMount() {
    fetch('http://localhost:9090/folders', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(data => {
      this.setState({
        folders: data
      })
    })
    .catch(error => {
      console.log(error.message)
    });

    fetch('http://localhost:9090/notes', {method: 'GET'})
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(data => {
      this.setState({
        notes: data
      })
    })
    .catch(error => {
      console.log(error.message)
    });
  }
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.selectedFolder,
      selectedNote: this.state.selectedNote,
      updateSelectedFolder: this.setSelectedFolder,
      updateSelectedNote: this.setSelectedNote,
      deleteNote: this.deleteNote,
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className='App'>
          <Header />
          <main>
            <Sidebar />
            <Main />
          </main>
        </div>
      </NoteContext.Provider>
    );
  }
}

export default App;