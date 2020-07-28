import React, { Component } from 'react';
import notes from '../store/dummy-store';

export default class Note extends Component{
    render(){
        return(
            <div>
                {notes.name}
            </div>
        )
    }
}
