//Tile component

//standard import of react 
import React from "react";
import { setSectionTitleAndURL,setBackButton } from "../features/articlePreviews/articlePreviewsSlice";
import { useDispatch} from "react-redux";
import { loadAllPreviews } from "../features/articlePreviews/articlePreviewsSlice";
import { Link} from "react-router-dom";


//This tile is being used by the logic component so needs to be exported
//It starts with a capital as it is a Component
//I have used destruring to grab the article which is an object with title, permalink, thumbnail and subreddit
export const Tile = ({article}) => {
    //Breaking the article parts into varibles to make it easier to see
    const {permalink,thumbnail, subreddit,title, id}= article;
    const dispatch=useDispatch();
    const findTitleStart = permalink.indexOf(id,0);
    const fixTitle = permalink.substring(findTitleStart+id.length+1);
    console.log("fixTitle:"+fixTitle);
    const fixSub= subreddit.substring(2);
    const path="/article/" + id +"/sub/" + fixSub +"/title/" + fixTitle;
     
    const handlesSubredditClick = (e) => {
        e.preventDefault();
        //console.log(subreddit);
        //console.log(subredditUrl);
        const newTitle=subreddit;
        const newURL=subredditUrl;

        dispatch(setSectionTitleAndURL({newTitle,newURL}));
        dispatch(loadAllPreviews(subredditUrl));
        dispatch(setBackButton(true));

    }

   

    //This is creating the link to the subreddit URL. It is the only bit of logic in this presentation component.
       const subredditUrl = "https://www.reddit.com/" + subreddit + ".json";


    //This is the return from this component and contains JSX and vanilla html
    //It displays the title of the article which is a hyperlink to the reddit page.
    //The link is taken from the permalink.
    //It displays the subreddit which is a link to the subreddit stored in subredditUrl
    //It displays any thumbnail that was linked to the article. This also links to the article
    //The links open to a new tab in the browser.
    return (
    
 
    <div name="tile" className="tilearea">
        <li className="tile">
                 <Link to={path}>
                    <h3>{title}</h3>
                 </Link>
               
                    <p className="sub" onClick={handlesSubredditClick}>{subreddit}</p>
                
                <Link to={path}>
                 
                     <img className="thumbnail" src={thumbnail}  alt="" />
                    
                </Link>
           
        </li>
    </div>
   
    
      )
}
