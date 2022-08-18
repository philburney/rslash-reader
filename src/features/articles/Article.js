//Logic Component for the Article 


//Import statements

//Needed for useEffect. Might also have useState if needed
import { useEffect } from "react";

//This is needed so you can access the select statements and cause the actions (reducers) to run
import { useDispatch,useSelector } from "react-redux";

import { selectArticle, addArticle, fakeLoad } from "./articleSlice";

export const Article = () => {
     const dispatch = useDispatch();
     const article = useSelector(selectArticle);
    const {title,imageURL,permalink,author, subreddit} = fakeLoad();
    console.log(title,imageURL,permalink,author, subreddit);
    dispatch(addArticle({title,imageURL,permalink,author, subreddit}));
    return (
        <>
        <h1> My Article</h1>
        </>
    );


}

export default Article;