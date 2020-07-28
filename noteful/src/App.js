import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import Header from '.header/Header';

class App extends React.Component () {
  render () {
    return (
      <main className='App'>
        <header>
          <Route path='/MainPage' component={Header} />
        </header>
        <Route path='/MainPage' component={MainPage} />
        <Route path='/FolderPage' component={FolderPage} />
        <Route path='/NotePage' component={NotePage} />
      </main>
    );
  }
}

export default App;