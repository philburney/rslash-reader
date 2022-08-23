//component to display the comments

import React from 'react';
import ReactMarkdown from 'react-markdown';




export const Comment = ({body,author}) => {
    return(
    <>
        <li className="comment">
            <p className='author'>{author}</p> 
            <div className='comment'>
            <ReactMarkdown children={body} />
            </div>
            
        </li>    
    </>
    );

}
