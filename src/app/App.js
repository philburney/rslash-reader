import React from 'react'; //import React 
//Example import of the a Component being imported as is used in the app 
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews" //You will need to import and Components (likely to be logic components from the features folder)
import { Search } from '../components/Search';
import {Article} from '../features/articles/Article';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
// The main app
function App() {
   return (
     
      
     //make it match the name in index.html. Components and vanilla html being used. If component then it must have been imported at top of this file
     <div className="app">
      <Router >
         
            <Route>
           <h1>Rslash Reader</h1>
           </Route>
           <Route path="/article/:id/sub/:articleSub/title/:articleTitle">
            <Article />
           </Route>
           <Route exact path="/">
             <Search />
             <br></br>
             <img src="./reddit_icon.png" alt="reddit logo" width="60px" />
             <ArticlePreviews /> 
           </Route>
        </Router>
     </div>
    
  );
}

//Keep this as needed
export default App;
