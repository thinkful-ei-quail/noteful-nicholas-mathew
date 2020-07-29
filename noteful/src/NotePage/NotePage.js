import React from 'react';
import Note from '../Note/Note';

export default function NotePage(props){
    return (
        <div className="note-page">
            <Note 
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className="notePage-content">
                {props.note.content}
            </div>
        </div>
    )
}
NotePage.defaultProps={
    note:{
        content: '',
    }
}