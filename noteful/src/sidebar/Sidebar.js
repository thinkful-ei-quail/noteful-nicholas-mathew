import React, { Component } from 'react';
import Folder   from '../Folder/Folder';
import folders from '../store/dummy-store';
import { Route } from 'react-router-dom';

export default class Sidebar extends Component{
    render(){

        return(
            <div>
                {folders.map(folder =>
                    <Route
                        path='/FolderPage/:folderId'
                        render={() =>
                            <Folder
                                id={folder.id}
                                name={folder.name}
                            />}
                    />
                )}
            </div>
        );
    }

}