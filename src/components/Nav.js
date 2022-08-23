import React from 'react';
import {  useHistory} from 'react-router-dom';
import { isSubreddit, selectTitle, setInSearch,URL, setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setActive, selectActive } from '../features/articles/articleSlice';


export const Nav =  () => {
    const history = useHistory();
    const currentTitle= useSelector(selectTitle);
    const inSub= useSelector(isSubreddit);
    const dispatch =useDispatch();
    const isActive=useSelector(selectActive);
    const currentURL = useSelector(URL);
    
    

    function handleClick() {
      const historySub = inSub;
      dispatch(setActive(false));
      history.push("/sub/popular");
      if (historySub) {
         window.location.reload(false);
      };
    }

    function handleBackClick() {
      // console.log(currentTitle);
      // const start=currentTitle.substring(0,2);
      // console.log(start);
      // if (start==="r/") {
      //    alert("double Back")
   
      // history.goBack();
      // window.location.reload(false);
      // } else {
      //    history.goBack();
      // }
      
      if (!isActive) {
     
        dispatch(setInSearch(false));
        history.push("/sub/popular");
        
        window.location.reload(false);
      } else {
         dispatch(setActive(false));
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