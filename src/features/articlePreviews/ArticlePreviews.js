//Logic Component for the Article Previews


//Import statements

//Needed for useEffect. Might also have useState if needed
import { useEffect } from "react";

//This is needed so you can access the select statements and cause the actions (reducers) to run
import { useDispatch,useSelector } from "react-redux";

//These are imports from the Slice. This includes the selects, reducers and general functions (including API calls).
//I have used destructuring to make it easier to see what is coming into this Component. 
import { 
    loadAllPreviews,
    selectAllPreviews,
    isLoading,
    selectTitle,
    URL,
    setSectionTitleAndURL,
    isSubreddit,
    setBackButton,
    selectInSearch,
    setInSearch,
    setInSubreddit
} from "./articlePreviewsSlice";

import { useParams } from "react-router-dom";

//This is an import from the presentation component called Tile. I am sending the data to the tiles from this file so need to import it

import { Tile } from "../../components/Tile";

//This is calling the initialisation which is currently taking the dummy data and returning an array
//The array contains objects. Each object represents one article with title, permalink, thumbnail and subreddit

    
//This is the declaration of the Component. Remember to start with a Capital letter. Each component has two parts.
// 1. Optional logic. This is basically JavaScript and and can involve anything needed.
// 2. The return statement. This is the JSX which will try and display so will contain a mix of JSX (eg calling components)
// and vanilla html 
        const ArticlePreviews = () => {
            //If you are going to run any reducers then you must use UseDispatch. This is often mapped to Dispatch to make it easier.
         const dispatch = useDispatch();

         //If you are going to read any data from the state you should be using the imported selectors which need to go through the useSelector function.
         //notice there are no brackets on the select name.
         const articles = useSelector(selectAllPreviews);
         const loading = useSelector(isLoading);
         const sectionTitle=useSelector(selectTitle);
         const currentUrl= useSelector(URL);
       
         const inSearch=useSelector(selectInSearch);
         let {sub} = useParams();
        
         let newURL=currentUrl;
          if (sectionTitle.substring(0,14) === "Searching for ") {
          const secondSearchCheck = true;
          alert(secondSearchCheck);
          };

         if (!inSearch) {
               let newURL=`https://www.reddit.com/r/${sub}.json`;
               let newTitle = `${sub} on reddit`;
               dispatch(setSectionTitleAndURL({newTitle,newURL}));
         } 

         

         //This is a standard UseEffect function from react and will run anytime the dispatch is used.
         //In this case it runs the loadAllPreviews to the store.
         

         useEffect(() => {
            dispatch(loadAllPreviews(newURL));
          }, [dispatch,newURL]);


          const handleBackClick = (e) => {
            let newURL=`https://www.reddit.com/r/${sub}.json`;
            let newTitle = `${sub} on reddit`;
            dispatch(setSectionTitleAndURL({newTitle,newURL}));
            dispatch(loadAllPreviews(newURL));
            dispatch(setBackButton(false));
            dispatch(setInSearch(false));
            dispatch(setInSubreddit(false));
          }
        
          if (loading) {
            return <div className="loading">Reaching out to Reddit...</div>;
          }
        
        //This is the second part the return statement.
        return (
            <>
            <section className='articles-container'>
              
                {/*  This is the section header. we only want it to appear once.*/ }
                <h2 className='section-title'>{sectionTitle}</h2> 
                <button className="clearbutton" onClick={handleBackClick} hidden={!inSearch}><img className="clearicon" src="./clear.png" alt="clear search"></img></button>
                {/*  This is the array of articles being passed from the logic component which is then being mapped and each instance sent to create an item on the page */ }
                    <ul>
                       {/*The Tile Component is being called for each individual article and passed to the presentation component (called Tile) to be displayed. The Tile needs an unique key (in this case the index) and the article object which has all the information it needs. This is being passed as prop. */}
                            {articles.map((article, index) =>
                              
                              <Tile article={article} key={index} />
                            )}
                    </ul>
            </section>
            </>)
};


//This exports the ArticlePreviews which is then imported into the App.js file. This is done
//because the App.js uses this in the main app. If this was not used then it would not be needed.
    export default ArticlePreviews;