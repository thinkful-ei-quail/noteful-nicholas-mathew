import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import Header from './header/header';

class App extends Component {
    state = 
    {
      state:[]
    }
  render () {
    return (
      <main className='App'>
        <header>
          <Link path='/MainPage' component={Header} />
        </header>
        <Main />
        <Link path='/' component={Main} />
        <Route path='/FolderPage' component={FolderPage} />
        <Route path='/NotePage' component={NotePage} />
      </main>
    );
  }
}

export default App;