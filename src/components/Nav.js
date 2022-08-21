import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import { isSubreddit } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from 'react-redux';

export const Nav =  () => {
    const history = useHistory();
    const inSub= useSelector(isSubreddit);
    function handleClick() {
      const historySub = inSub;
      history.push("/");
      if (historySub) {
         window.location.reload(false);
      };
    }



 return (
    <nav> 
    <button className="homebutton" onClick={handleClick}><img src='./home.png' alt="home button" className="homeicon"></img></button>
    </nav>
 )
}