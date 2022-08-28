//This is the Navigation bar. In this case it is just 2 buttons home and back.

//import react
import React from 'react';

//Import useHistory which is used for the back button. This has now been superseeded by navigate.
import {  useHistory} from 'react-router-dom';

//This is grabbing reducers and selectors from the article preview slice.
import { setInSearch, setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';

//This allows the reducers and actions to be used on the store
import { useSelector, useDispatch } from 'react-redux';

//This is importing the settings to know whether the nav bar is displaying the preview or an article
import { setActive, selectActive } from '../features/articles/articleSlice';




export const Nav =  () => {
    //Make the names user friendly.
    const history = useHistory();
    const dispatch = useDispatch();
    const isActive= useSelector(selectActive);   

    //Handles what happens when the home button is clicked.
    //Indicates the search is not in progess, that an article is not being displayed,
    //reset the title and Url and go back to the home page.
    function handleClick() {
      dispatch(setInSearch(false));
      dispatch(setActive(false));
      dispatch(setSectionTitleAndURL("",""))
      history.push("/sub/popular");
    }


    //This function handles what happens when the back button is clicked.
    //IsActive is used to see whether a page refresh needs to be forced

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

     //The return is displaying the 2 Boostrap Buttons
 return (
    <nav> 
      <button  className="homebutton" onClick={handleClick}><img src='./home.png' alt="home button" className="homeicon"></img></button>{' '}
      <button  className="backbutton" onClick={handleBackClick}><img src='./back.png' alt="back button" className="backicon"></img></button>{' '}
    </nav>
 )
}