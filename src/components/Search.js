import React from 'react';
import { useState } from 'react';
import { selectTitle,URL, setInSearch } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from 'react-redux';
import { setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';
import { useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';



export const Search = () => {

    const dispatch = useDispatch();

    const [searchTerm,setSearchTerm] = useState("");
 

    let currentTitle = useSelector(selectTitle);
    let currentUrl = useSelector(URL);

  
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
   
    const onKeyUp = (event) => {
        if (event.charCode === 13) {
          handleSubmitSearch(event);
        }
    }

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