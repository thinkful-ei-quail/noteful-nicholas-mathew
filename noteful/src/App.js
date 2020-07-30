import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import FolderList from './FolderList/FolderList';
import NotePage from './NotePage/NotePage';
import Header from './Header/Header';
import store from './store/dummy-store';
import SidebarNotePage from './SidebarNotePage/SidebarNotePage';
import NoteList from './NoteList/NoteList';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(store), 1000);
  }

renderRoutesNav(){
  return (
    <div>
    {['/', '/folder/:folderId'].map(path =>(
      <Route 
        exact
        key={path} 
        path={path}
        component={FolderList}
      />
    ))}
    <Route 
        path="/note/:noteId"
        component={SidebarNotePage}
    />
    </div>
  )
}
renderRoutesMain(){
  return (
    <div>
      {['/', '/folder/:folderId'].map(path =>(
        <Route 
          exact
          key={path} 
          path={path} 
          component={NoteList}
        />
      ))}
      <Route 
          path="/note/:noteId"
          component={NotePage}
      />
    </div>
  );
}
  render () {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
    }
    return (
      <div className='App'>
        <NotefulContext.Provider value={contextValue}>
          <header>
            <Link to='/'><Header /></Link>
          </header>
          <div className='folders-notes'>
            <nav className="App-nav">{this.renderRoutesNav()}</nav>
            <main className="App-main">{this.renderRoutesMain()}</main>
          </div>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;