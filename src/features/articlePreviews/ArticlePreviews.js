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
                            // Only do this if items have no stable IDs
                            <li key={index}>
                                <h2>{article.title}</h2>
                                <br></br>
                                <img src={article.thumbnail} />
                            </li>
                            )}
                    </ul>
            </section>
            </>)





    };

    export default ArticlePreviews;