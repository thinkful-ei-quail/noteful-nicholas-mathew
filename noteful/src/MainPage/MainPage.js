import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';

export default class Main extends Component{
    render(){
    return(
        <div>
            <Sidebar />
            <NoteList />
        </div>
        
    )
    }
}