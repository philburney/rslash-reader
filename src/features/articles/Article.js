//Logic Component for the Article 


//Import statements

//Needed for useEffect. Might also have useState if needed
import { useEffect } from "react";
import { Comment } from "../../components/Comment";
import { loadArticle, checkLoading,selectArticle,setActive } from "./articleSlice";
//This is needed so you can access the select statements and cause the actions (reducers) to run
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export const Article = () => {
     const dispatch = useDispatch();
    
     const loading= useSelector(checkLoading);
     const {title,subreddit,comments,author,imageURL}=useSelector(selectArticle);
      dispatch(setActive(true));
    
    const {articleSub,id, articleTitle} = useParams();
   
    let dynamicURL = `https://www.reddit.com/r/${articleSub}/comments/${id}/${articleTitle}.json`

    
    useEffect(() => {
        dispatch(loadArticle(dynamicURL));
      }, [dynamicURL,dispatch]);

    if (loading) {
        return <div className="loading">Reaching out to Reddit...</div>;
      }
   
    
    return (
       
         <>
          
            <h2 className="articletitle"> {title}</h2>
            <h3 className="articlesub">{subreddit} </h3>
            <img src={imageURL} alt="" className="articleimage"></img>
            <h4 className="articleauthor" >{author}</h4>
            <hr></hr>
            <ul className="commentList">
                       {/*The comment Component is being called for each individual article and passed to the presentation component (called Tile) to be displayed. The Tile needs an unique key (in this case the index) and the article object which has all the information it needs. This is being passed as prop. */}
                            {comments.map((comment, index) =>
                             
                              <Comment body={comment.body} author={comment.author} key={index} />
                           )}
            </ul>
        </>
       
        
        
    
       
     
        
        
    );


}

export default Article;