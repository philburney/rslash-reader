//This component is responsible for the Seach bar

//Import react
import React from 'react';

//Import useState which holds the Search term using the standard React hook
import { useState } from 'react';

//Used to set  and read the title and URL from the seach and to indicate a search is in progress
import { selectTitle,URL, setInSearch,  setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';

//Allowing Selectors and reducers to be used on the store
import { useSelector, useDispatch } from 'react-redux';

//Bootstrap button import
import Button from 'react-bootstrap/Button';



export const Search = () => {
    const dispatch = useDispatch();

    //Set up hook for the search term
    const [searchTerm,setSearchTerm] = useState("");
 
    //Recore the current title and URL
    let currentTitle = useSelector(selectTitle);
    let currentUrl = useSelector(URL);

   //This keeps the store up to date with the input from the user
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    //This checks if the user presses enter. If so it triggers the search.
    const onKeyUp = (event) => {
        if (event.charCode === 13) {
          handleSubmitSearch(event);
        }
    }

    //This triggers the search
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        //checking if search has already been done and if so reset the title and base URL
        if (currentTitle.substring(0,6) ==="Search") {
            
            //reset the title
            let findStem = currentTitle.indexOf(" in ");
            console.log(findStem);
            currentTitle=currentTitle.substring(findStem+4);
            console.log(currentTitle);

           //reset the URL 
           findStem = currentUrl.indexOf("search.json");
           currentUrl=currentUrl.substring(0,findStem-1)  + ".json";
           console.log(currentUrl);

        }

        const newTitle = `Searching for ${searchTerm}`
        let newURL = currentUrl.substring(0,currentUrl.length-5) + `/search.json?q=${searchTerm}&restrict_sr=1`;
        
     
        dispatch(setSectionTitleAndURL({newTitle,newURL}));
        setSearchTerm("");
        dispatch(setInSearch(true));
   
        
    }
    

    return (
        <form className="innersearch">
            <input type="text" onKeyPress={onKeyUp} className="searchbox" placeholder="Search" value={searchTerm} onChange={handleSearchChange}/>
            <Button  variant="primary" onClick={handleSubmitSearch}  disabled={!searchTerm} className="searchbutton" >Search</Button>
           
       </form>
    )
}