//Logic Component for the Article. Displays the single article + image/video + comments


//Import statements

//Needed for useEffect. Might also have useState hook if needed
import { useEffect } from "react";

//Imports the comment component
import { Comment } from "../../components/Comment";
import { loadArticle, checkLoading,selectArticle,setActive } from "./articleSlice";
//This is needed so you can access the select statements and cause the actions (reducers) to run
import { useDispatch,useSelector } from "react-redux";


//Allows the url parameters to be grabbed
import { useParams, useHistory } from "react-router-dom";

//Import Bootstrap components to help with design.
import Spinner from 'react-bootstrap/Spinner';


export const Article = () => {
     const dispatch = useDispatch();
     const history= useHistory();
     const loading= useSelector(checkLoading);
     const {title,subreddit,comments,author,imageURL}=useSelector(selectArticle);
      dispatch(setActive(true));
    
    const {articleSub,id, articleTitle} = useParams();
   
    let dynamicURL = `https://www.reddit.com/r/${articleSub}/comments/${id}/${articleTitle}.json`

    
    useEffect(() => {
        dispatch(loadArticle(dynamicURL));
      }, [dynamicURL,dispatch]);


      //handle the subclick being selected from the article
      const handleSubClick = (e) => {
        const fixSub= subreddit.substring(2);
        const subPath = "/sub/" + fixSub;
        history.push(subPath);  //create the path and push
        dispatch(setActive(false)); //set the article being active to off
        window.location.reload(true); //refresh the previews 

      }


     //Display whilst API pending.
      if (loading) {
        return (
        <div className="loading">
          <p>Reaching out to Reddit...</p>
          <Spinner animation="border" role="status">
          </Spinner>
          </div>);
      }

      //chekcking if there is a video by looking for .mp4 in URL
      const isVideo = (imageURL.indexOf(".mp4")!==-1);

    return (
       
         <>
            <div className="article">
              
                <h2 className="articletitle"> {title}</h2>
               <h3 onClick={handleSubClick} className="articlesub">{subreddit} </h3>
                { isVideo ? <><video  controls="true" preload="auto">
                  <source src={imageURL} type="video/mp4" /></video></>:
                  <img src={imageURL} alt="" className="articleimage"></img>
                }
               <h4 className="articleauthor" >{author}</h4>
               <hr></hr>
              
               <ul className="commentList">
                       {/*The comment Component is being called for each individual article and passed to the presentation component (called Tile) to be displayed. The Tile needs an unique key (in this case the index) and the article object which has all the information it needs. This is being passed as prop. */}
                            {comments.map((comment, index) =>
                             
                              <Comment body={comment.body} author={comment.author} key={index} />
                           )}
                </ul>
               
           
           </div>
        </>

        
    );


}

export default Article;