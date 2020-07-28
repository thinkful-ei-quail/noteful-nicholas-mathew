import React, { Component } from 'react';
import folders from '../store/dummy-store';

export default class FolderPage extends Component{
    render(){
        return (
            <div>
            {folders.name}
            </div>

        )
    }
}
