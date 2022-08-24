import React from 'react'; //import React 
//Example import of the a Component being imported as is used in the app 
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews" //You will need to import and Components (likely to be logic components from the features folder)
import { Search } from '../components/Search';
import {Article} from '../features/articles/Article';
import { BrowserRouter as Router,  Redirect,  Route } from 'react-router-dom';
import { Nav } from '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
 
// The main app
function App() {
   
 

   return (
     
      
     //make it match the name in index.html. Components and vanilla html being used. If component then it must have been imported at top of this file
     <div className="app">
      <Router >
         
            <Route>
            <Nav />
           <h1>Rslash Reader</h1>
           <Redirect to="/sub/popular" />
           </Route>
           <Route path="/article/:id/sub/:articleSub/title/:articleTitle">
            <Article />
           </Route>
           <Route path="/sub/:sub">
           <img src="./redditblue.png" alt="reddit logo" width="60px" />
             <Search />
             <br></br>
            
             <ArticlePreviews /> 
             </Route>

           <Route exact path="/">
             <img src="./reddit_icon.png" alt="reddit logo" width="60px" />
             <Search />
             <br></br>
            
             <ArticlePreviews /> 
           </Route>
        </Router>
     </div>
    
  );
}

//Keep this as needed
export default App;
