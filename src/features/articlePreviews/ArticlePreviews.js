import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { 
    loadPreviews,
    selectAllPreviews,
    isLoading, 
    addTitles} from "./articlePreviewsSlice";
    const articleArray=loadPreviews();
    
   
    



const ArticlePreviews = () => {
         const dispatch = useDispatch();
         const articles = useSelector(selectAllPreviews);
         const loading = useSelector(isLoading);
          
         useEffect(() => {dispatch(addTitles(articleArray))
         },[])

       
        
     
        return (
            <>
            <section className='articles-container'>
                <h2 className='section-title'>Popular on Reddit</h2>
                    <ul>
                            {articles.map((article, index) =>
                            <li key={index}>
                              <a href={article.permalink} target="_isblank"> <h3>{article.title}</h3>
                                
                                <p>{article.subreddit}</p>
                                <br></br>
                                <img src={article.thumbnail} />
                                
                                </a>
                            </li>
                            )}
                    </ul>
            </section>
            </>)





    };

    export default ArticlePreviews;