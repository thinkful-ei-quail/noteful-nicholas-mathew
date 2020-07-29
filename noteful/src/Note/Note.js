import React from 'react';
import {Link} from 'react-router-dom';

export default function Note(props){
    return(
        <div>
            <h3>
                <Link to={`/note/${props.id}`}> 
                    {props.name} {' '}
                    <br />
                    Modified: {' '}
                    <span>
                        {/* {new Intl.DateTimeFormat("en-US").format(props.modified)} */}
                        {/* {props.modified.toString()} */}
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(props.modified))}
                    </span>
                </Link>
            </h3>
        </div>
    )
}
