import React from 'react';
import {Link} from 'react-router-dom';

export default function Note(props){
    return(
        <div>
            <h3><Link to={`/note/${props.id}`}> 
             {props.name}
            </Link></h3>
        </div>
    )
}
