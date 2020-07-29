import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import {notesCountForFolder} from '../finder';
import './FolderList.css';

export default class FolderList extends Component{
    render(){
        return (
            <div className='FolderListNav'>
                <ul className='FolderList'>
                    {this.props.folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                            className='NoteListNav__folder-link'
                            to={`/folder/${folder.id}`}
                            >
                                {folder.name} {' '}
                                <span className='NoteListNav__num-notes'>
                                    {notesCountForFolder(this.props.notes, folder.id)}
                                </span>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>

        )
    }
}
