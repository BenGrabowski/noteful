import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainSidebar from './Sidebar/MainSidebar';
import FolderSidebar from './Sidebar/FolderSidebar';
import NoteSidebar from './Sidebar/NoteSidebar';
import Main from './Main/Main';
import MainPage from './Main/MainPage';
import NotePage from './Main/Notepage';
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
        <Sidebar>
          <Route 
            exact path='/' 
            render={() => 
              <MainSidebar 
                folders={this.state.folders} 
              />
            } 
          />
          <Route 
            path='/folder'
            render={() => 
              <FolderSidebar />
            }  
          />
          <Route 
            path='/note'
            render={() =>
              <NoteSidebar />
            }
          />
        </Sidebar>
        <Main>
          <Route exact path='/' render={() => <MainPage />} />
          <Route path='/folder' render={() => <MainPage />} />
          <Route path='/note' render={() => <NotePage />} />
        </Main>
      </div>
    );
  }
}

export default App;