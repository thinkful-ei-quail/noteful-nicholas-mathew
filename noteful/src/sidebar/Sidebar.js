import React from 'react';
import { NavLink, Link} from 'react-router-dom';

export default function Sidebar(props) {
    return(
        <div>
            <ul className="nav-list">
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            className="nav-folder-link"
                            to={`/folder/${folder.id}`}
                        >
                        <span className="nav-note-num">
                            #todo: count notes in folder id
                        </span>
                        {folder.name}
                        </ NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}
Sidebar.defaultProps = {
    folders: []
}