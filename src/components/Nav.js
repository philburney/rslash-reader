import React from 'react';
import {  useHistory} from 'react-router-dom';
import { setInSearch, setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setActive, selectActive } from '../features/articles/articleSlice';
import Button from 'react-bootstrap/Button';


export const Nav =  () => {
    const history = useHistory();
  
    const dispatch =useDispatch();
    const isActive=useSelector(selectActive);
   
    
    

    function handleClick() {
      
      dispatch(setInSearch(false));
      dispatch(setActive(false));
      dispatch(setSectionTitleAndURL("",""))
      history.push("/sub/popular");
    }

    function handleBackClick() {
     
      
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
    <Button variant="primary" className="homebutton" onClick={handleClick}><img src='./home.png' alt="home button" className="homeicon"></img></Button>{' '}
    <Button variant="primary" className="backbutton" onClick={handleBackClick}><img src='./back.png' alt="back button" className="backicon"></img></Button>{' '}
    </nav>
 )
}