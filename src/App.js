import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import NoteContext from './NoteContext';
import './App.css';


class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    selectedFolder: undefined,
    selectedNote: undefined,
  }
  
  setSelectedFolder = (id) => {
    this.setState({
      selectedFolder: id
    });
  }

  setSelectedNote = (id) => {
    this.setState({
      selectedNote: id
    });
  }

  handleDeleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  handleUpdateNote = updatedNote => {
    this.setState({
      notes: this.state.notes.map(note =>
          (note.id !== updatedNote.id) ? note : updatedNote
        )
    })
  }

  updateFolders = (newFolder) => {
    this.state.folders.push(newFolder);
    this.setState({folders: this.state.folders});
  }

  updateNotes = (newNote) => {
    this.state.notes.push(newNote)
    this.setState({notes: this.state.notes})
  }

  componentDidMount() {
    fetch('https://desolate-caverns-20141.herokuapp.com/api/folders', {
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

    fetch('https://desolate-caverns-20141.herokuapp.com/api/notes', {method: 'GET'})
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({
        notes: data
      })
    })
    .catch(error => {
      console.log(error.message)
    });
  }
  
  render() {
    console.log(this.props)
    
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.selectedFolder,
      selectedNote: this.state.selectedNote,
      setSelectedFolder: this.setSelectedFolder,
      setSelectedNote: this.setSelectedNote,
      handleDeleteNote: this.handleDeleteNote,
      updateFolders: this.updateFolders,
      handleUpdateNote: this.handleUpdateNote,
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className='App'>
          <Header />
          <main>
            <Sidebar />
            <Main 
              updateFolders={this.updateFolders}
              updateNotes={this.updateNotes}
              handleUpdateNote={this.handleUpdateNote}
            />
          </main>
        </div>
      </NoteContext.Provider>
    );
  }
}

export default App;