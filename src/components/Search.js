import React from 'react';
import { useState } from 'react';
import { selectTitle,URL, setInSearch, setBackButton } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from 'react-redux';
import { setSectionTitleAndURL } from '../features/articlePreviews/articlePreviewsSlice';
import { useDispatch} from "react-redux";




export const Search = () => {

    const dispatch = useDispatch();

    const [searchTerm,setSearchTerm] = useState("");
 

    let currentTitle = useSelector(selectTitle);
    let currentUrl = useSelector(URL);
  
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
   
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
        
        console.log(searchTerm);
        
        console.log(currentTitle);
        console.log(currentUrl);
        console.log(newTitle);
        console.log(newURL);
        dispatch(setSectionTitleAndURL({newTitle,newURL}));
        setSearchTerm("");
        dispatch(setInSearch(true));
        dispatch(setBackButton(true));
        
    }
    

    return (
        <form className="innersearch">
            <input type="text" className="searchbox" placeholder="Search" value={searchTerm} onChange={handleSearchChange}/>
            <button onClick={handleSubmitSearch}  disabled={!searchTerm} className="searchbutton" >Search</button>
           
       </form>
    )
}