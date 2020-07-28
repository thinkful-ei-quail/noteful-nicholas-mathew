import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import Header from './header/Header';
import store from './store/dummy-store';
import Sidebar from './sidebar/Sidebar';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(store), 1000);
  }

  render () {
    console.log(this.state, 'react state');
    return (
      <main className='App'>
        <header>
          <Link path='/MainPage' component={Header} />
        </header>
        <Sidebar />
        <Link path='/' component={Main} />
        <Route path='/FolderPage' component={FolderPage} />
        <Route path='/NotePage' component={NotePage} />
      </main>
    );
  }
}

export default App;