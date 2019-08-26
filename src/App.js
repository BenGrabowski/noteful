import React from 'react';
// import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import STORE from './STORE';


class App extends React.Component {
  state = {
    folders: STORE["folders"],
    notes: STORE["notes"]
  }
  
  render() {
    return (
      <div className='App'>
        <Header />
        <Sidebar folders={this.state.folders} />
        <Main />
      </div>
    );
  }
}

export default App;