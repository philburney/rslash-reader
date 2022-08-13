import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { 
    loadPreviews,
    selectAllPreviews,
    isLoading, 
    addTitles} from "./articlePreviewsSlice";
import { Tile } from "../../components/Tile";

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
                              <Tile article={article} key={index} />
                            )}
                    </ul>
            </section>
            </>)





    };

    export default ArticlePreviews;