//Logic Component for the Article 


//Import statements

//Needed for useEffect. Might also have useState if needed
import { useEffect } from "react";
import { Comment } from "../../components/Comment";
import { loadArticle, checkLoading,selectArticle,setActive } from "./articleSlice";
//This is needed so you can access the select statements and cause the actions (reducers) to run
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

        return (
        <div className="loading">
          <p>Reaching out to Reddit...</p>
          <Spinner animation="border" role="status">
          </Spinner>
          </div>);
      }
   
    
    return (
       
         <>
            <div className="article">
            <Card>
            <Card.Title><h2 className="articletitle"> {title}</h2></Card.Title>
            <Card.Subtitle><h3 className="articlesub">{subreddit} </h3></Card.Subtitle>
            <img src={imageURL} alt="" className="articleimage"></img>
            <h4 className="articleauthor" >{author}</h4>
            <hr></hr>
            <ListGroup>
            <ul className="commentList">
                       {/*The comment Component is being called for each individual article and passed to the presentation component (called Tile) to be displayed. The Tile needs an unique key (in this case the index) and the article object which has all the information it needs. This is being passed as prop. */}
                            {comments.map((comment, index) =>
                             
                              <Comment body={comment.body} author={comment.author} key={index} />
                           )}
            </ul>
            </ListGroup>
            </Card>
            </div>
        </>
       
        
        
    
       
     
        
        
    );


}

export default Article;