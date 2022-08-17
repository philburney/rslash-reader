import React from 'react';
import { useState } from 'react';
import { selectTitle,URL } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from 'react-redux';
import { setSectionTitle } from '../features/articlePreviews/articlePreviewsSlice';
import { useDispatch} from "react-redux";



export const Search = () => {

    const dispatch = useDispatch();

    const [searchTerm,setSearchTerm] = useState("");

    const currentTitle = useSelector(selectTitle);
    const currentUrl = useSelector(URL);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
   
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const newTitle = `Seaching for ${searchTerm} in ${currentTitle}` ;
        let newURL = currentUrl.substring(0,currentUrl.length-5) + `/search.json?q=${searchTerm}`;
        
        console.log(searchTerm);
        
        console.log(currentTitle);
        console.log(currentUrl);
        console.log(newTitle);
        console.log(newURL);
        dispatch(setSectionTitle({newTitle,newURL}));
        
        
    }
    

    return (
        <form className="search">
            <input type="text" className="searchbox" placeholder="Search" onChange={handleSearchChange}/>
            <button onClick={handleSubmitSearch}  >Search</button>
           
       </form>
    )
}