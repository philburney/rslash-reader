//Tile component - Each tile displays a headline, subreddit and where possible a thumbnail

//standard import of react 
import React from "react";

//Used by react route to prevent renders when not needed
import { Link} from "react-router-dom";





//This tile is being used by the logic component so needs to be exported
//It starts with a capital as it is a Component
//I have used destruring to grab the article which is an object with title, permalink, thumbnail and subreddit
export const Tile = ({article}) => {
    //Breaking the article parts into varibles to make it easier to see
    const {permalink,thumbnail, subreddit,title, id}= article;
    const findTitleStart = permalink.indexOf(id,0);

    //Fixing the title and creating the path that can be used by react router.
    const fixTitle = permalink.substring(findTitleStart+id.length+1);
    const fixSub= subreddit.substring(2);
    const path="/article/" + id +"/sub/" + fixSub +"/title/" + fixTitle;
    const subPath = "/sub/" + fixSub;
    


   

   


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
              
                
                     <Link to={subPath}>
                       <p className="sub" >{subreddit}</p>
                    </Link>
             
               
                     <Link to={path}>
                      <img  className="thumbnail" src={thumbnail}  alt="" />
                     </Link>
       
        </li>
    </div>
   
  
   )
}
