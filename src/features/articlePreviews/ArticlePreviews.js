import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { 
    loadPreviews,
    selectAllPreviews,
    isLoading, 
    addTitles} from "./articlePreviewsSlice";
    const titleArray=loadPreviews();
   
    console.log(titleArray);



const ArticlePreviews = () => {
         const dispatch = useDispatch();
         const articles = useSelector(selectAllPreviews);
         const loading = useSelector(isLoading);
          
         useEffect(() => {dispatch(addTitles(titleArray))
         },[])

         
        
     
        return (
            <>
            <section className='articles-container'>
            <h2 className='section-title'>Popular on Reddit</h2>
            <ul>
            
                {articles.map((article,index)=>{
                    return (
                    <li key={index}>{article}</li>
                    )
                })}

            </ul>
        </section>
    </>
        );





    };

    export default ArticlePreviews;