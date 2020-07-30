import React, { Component } from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { getNotesForFolder } from '../finder';

export default class NoteList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    render() {
        const { notes=[] } = this.context;
        const { folderId } = this.props.match.params;
        const notesForFolder = getNotesForFolder(notes, folderId);

        return(
            <div className="noteList">
                <ul>
                    {notesForFolder.map(note =>
                        <li key={note.id}>
                            <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified} 
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}