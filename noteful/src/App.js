import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import Header from './header/header';
import store from './store/dummy-store';
import Sidebar from './sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
import {folderFind, noteFind} from './finder';

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
    {['/folder/:folder.id'].map(path =>(
      <Route 
        exact
        key={path} 
        path={path} 
        render={propsRoute => (
          <NoteList
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
          return <Sidebar {...propsRoute} folder={folder} />
        }}
    />
    </div>
  )
}
renderRoutesMain(){
  const {notes, folders} = this.state;
  return (
    <div>
    {['/folder/:folder.id'].map(path =>(
      <Route 
        exact
        key={path} 
        path={path} 
        return={propsRoute => (
          <NoteList
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
          const note = noteFind(notes, noteId);
          return <NotePage {...propsRoute} note={note} />
        }}
    />
    </div>
  )
}
  render () {
    console.log(this.state, 'react state');
    return (
      <div className='App'>
        <header>
          <Link to='/MainPage' component={Header} />
        </header>
        <main>
        <Link to='/' component={Main} />
        <Route path='/FolderPage' component={FolderPage} />
        <Route path='/NotePage' component={NotePage} />
        </main>
      </div>
    );
  }
}

export default App;