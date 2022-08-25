//component to display the comments for each article

//imports for react
import React from 'react';

//Comments are in markdown so this allow it to be correctly displayed
import ReactMarkdown from 'react-markdown';




//Each comment is made up of the body and the author of the comment. No logic so no return statement needed.
export const Comment = ({body,author}) =>     
    <>
        
        <li className="comment">
            <p className='author'>{author}</p> 
            <div className='comment'>
            <ReactMarkdown children={body} />
            </div>
            
        </li>    
    </>
   


