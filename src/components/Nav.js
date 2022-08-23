import React from 'react';
import {  useHistory} from 'react-router-dom';
import { isSubreddit, selectTitle } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from 'react-redux';



export const Nav =  () => {
    const history = useHistory();
    const currentTitle= useSelector(selectTitle);
    const inSub= useSelector(isSubreddit);
    

    function handleClick() {
      const historySub = inSub;
      history.push("/");
      if (historySub) {
         window.location.reload(false);
      };
    }

    function handleBackClick() {
      console.log(currentTitle);
      const start=currentTitle.substring(0,2);
      console.log(start);
      if (start==="r/") {
         alert("double Back")
   
      history.goBack();
      window.location.reload(false);
      } else {
         history.goBack();
      }
    
     
      
      
    }



 return (
    <nav> 
    <button className="homebutton" onClick={handleClick}><img src='./home.png' alt="home button" className="homeicon"></img></button>
    <button className="backbutton" onClick={handleBackClick}><img src='./back.png' alt="back button" className="backicon"></img></button>
    </nav>
 )
}