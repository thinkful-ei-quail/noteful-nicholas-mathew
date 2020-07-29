import React from 'react';
import Note from '../Note/Note';

export default function NoteList(props){
    return(
        <div className="noteList">
            <ul>
                {props.notes.map(note =>
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
    )
}
NoteList.defaultProps = {
    notes:[],
}