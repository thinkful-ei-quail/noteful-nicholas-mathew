import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import { folderFind, noteFind } from '../finder';

export default class NotePageNav extends Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext;

  render() {
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const note = noteFind(notes, noteId) || {};
    const folder = folderFind(folders, note.folderId);

    return (
      <div className='NotePageNav'>
        <button
          tag='button'
          role='link'
          className='NotePageNav__back-button'
          onClick={() => this.props.history.goBack()}
        >  
          Back
        </button>
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    );
  }
}