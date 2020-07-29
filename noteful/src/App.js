import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import FolderList from './FolderList/FolderList';
import NotePage from './NotePage/NotePage';
import Header from './Header/Header';
import store from './store/dummy-store';
import SidebarNotePage from './SidebarNotePage/SidebarNotePage';
import NoteList from './NoteList/NoteList';
import { folderFind, noteFind, getNotesForFolder } from './finder';
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
  const {notes, folders} = this.state;
  return (
    <div>
    {['/', '/folder/:folderId'].map(path =>(
      <Route 
        exact
        key={path} 
        path={path} 
        render={propsRoute => (
          <FolderList
            folders={folders}
            notes={notes}
            {...propsRoute}
          />
        )}
      />
    ))}
    <Route 
        path="/note/:noteId"
        render = {propsRoute => {
          const {noteId} = propsRoute.match.params;
          const note = noteFind(notes, noteId) || {}
          const folder = folderFind(folders, note.folderId);
          return <SidebarNotePage {...propsRoute} folder={folder} />
        }}
    />
    </div>
  )
}
renderRoutesMain(){
  const {notes} = this.state;
  return (
    <div>
      {['/', '/folder/:folderId'].map(path =>(
        <Route 
          exact
          key={path} 
          path={path} 
          render={propsRoute => {
            const {folderId} = propsRoute.match.params
            const notesForFolder = getNotesForFolder(notes, folderId);
            return (
              <NoteList
                notes={notesForFolder}
                {...propsRoute}
              />
            );
          }}
        />
      ))}
      <Route 
          path="/note/:noteId"
          render = {propsRoute => {
            const {noteId} = propsRoute.match.params;
            const note = noteFind(notes, noteId);
            return <NotePage {...propsRoute} note={note} />
          }}
      />
    </div>
  );
}
  render () {
    // console.log(this.state, 'react state');
    return (
      <div className='App'>
        <header>
          <Link to='/'><Header /></Link>
        </header>
        <div className='folders-notes'>
          <nav className="App-nav">{this.renderRoutesNav()}</nav>
          <main className="App-main">{this.renderRoutesMain()}</main>
        </div>
      </div>
    );
  }
}

export default App;