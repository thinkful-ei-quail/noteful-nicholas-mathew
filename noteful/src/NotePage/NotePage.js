import React, { Component } from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { noteFind } from '../finder';

export default class NotePage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    render() {
        const { notes=[] } = this.context;
        const { noteId } = this.props.match.params;
        const thisNote = noteFind(notes, noteId) || { content: ''};

        return (
            <div className="note-page">
                <Note 
                    id={thisNote.id}
                    name={thisNote.name}
                    modified={thisNote.modified}
                />
                <div className="notePage-content">
                    {thisNote.content}
                </div>
            </div>
        );
    }
}