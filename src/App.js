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

  handleDeleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  returnHome = () => {
    console.log('returnHome ran')
    this.props.history.push('/')
  }

  // rerenderApp = () => {
  //   this.setState({state: this.state});
  // }

  updateFolders = (newFolder) => {
    this.setState({folders: this.state.folders.push(newFolder)});
    console.log('updateFolders ran')
    console.log(newFolder)
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
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.selectedFolder,
      selectedNote: this.state.selectedNote,
      updateSelectedFolder: this.setSelectedFolder,
      updateSelectedNote: this.setSelectedNote,
      handleDeleteNote: this.handleDeleteNote,
      returnHome: this.returnHome,
      // rerenderApp: this.rerenderApp
      updateFolders: this.updateFolders,
    }
    
    return (
      <NoteContext.Provider value={contextValue}>
        <div className='App'>
          <Header />
          <main>
            <Sidebar />
            <Main 
              // rerender={() => this.rerenderApp()}
              updateFolders={() => this.updateFolders()}
            />
          </main>
        </div>
      </NoteContext.Provider>
    );
  }
}

export default App;