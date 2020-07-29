import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import {notesCountForFolder} from '../finder';
import NotefulContext from '../NotefulContext';
import './FolderList.css';

export default class FolderList extends Component{
    render(){
        return (
            <div className='FolderListNav'>
                <NotefulContext.Consumer>
                    {(context) => (
                        <ul className='FolderList'>
                            {context.folders.map(folder =>
                                <li key={folder.id}>
                                    <NavLink
                                    className='NoteListNav__folder-link'
                                    to={`/folder/${folder.id}`}
                                    >
                                        {folder.name} {' '}
                                        <span className='NoteListNav__num-notes'>
                                            {notesCountForFolder(context.notes, folder.id)}
                                        </span>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    )}
                </NotefulContext.Consumer>
            </div>

        )
    }
}
