//component to display the comments

import React from 'react';

import {useSelector} from "react-redux";



export const Comment = ({body,author}) => {
    return(
    <>
        <li className="comment">
            <p className='author'>{author}</p> 
            <p className='comment'>{body}</p>
            
        </li>    
    </>
    );

}
