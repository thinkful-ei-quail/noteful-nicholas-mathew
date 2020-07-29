import React, { Component } from 'react';
import folders from '../store/dummy-store';
import { NavLink, Link} from 'react-router-dom';

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
                                <span className='NoteListNav__num-notes'>
                                    #todo count notes for folder
                                </span>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>

        )
    }
}
