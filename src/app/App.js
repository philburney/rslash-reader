import React from 'react'; //import React 
 

//Imported Article Previews to display the tiles
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews" //You will need to import and Components (likely to be logic components from the features folder)

//Import of the Search component to control the search bar
import { Search } from '../components/Search'; 

//Import the Article Component which is an individual reddit article
import {Article} from '../features/articles/Article';

//Imports the React Router to allow the app to be multipage.
import { BrowserRouter as Router,  Redirect,  Route } from 'react-router-dom';

//Imports the Navigation component which is for the 2 nav buttons (home and back)
import { Nav } from '../components/Nav';

//Imports Bootstrap which is used minimally for Web Design.
import 'bootstrap/dist/css/bootstrap.min.css';
 
// The main app
function App() {
    return (  
     //make it match the name in index.html. Components and vanilla html being used. If component then it must have been imported at top of this file
     <div className="app">
      {/* If React Router is being used (this version) then the code needs to sit in Router Elements */}
      <Router >
           {/* This is the first "route" and is always displayed. Consists of the Nav bar and app title and redirects to the default page = Popular on Reddit */}
            <Nav />
            <h1>Rslash Reader</h1>

           {/* The next route uses the path and is used for locating the article. It needs 3 parts to locate the URL on reddit. The id, the title and the subreddit */}
           <Route path="/article/:id/sub/:articleSub/title/:articleTitle">
            <Article />
           </Route>

           {/* This Route is used when someone selects a subreddit. The sub is used to create the url needed by the api */}
           {/* It consists of the logo, the search bar and the ArticlePreviews */}
           <Route path="/sub/:sub">
              <img src="./redditblue.png" alt="reddit logo" width="60px" className="logo" />
              <Search />
              <br></br>
              <ArticlePreviews /> 
            </Route>
            <Route exact path="/">
          
              
               <Redirect to="/sub/popular" />
            </Route> 

        </Router>
     </div>
    
  );
}

//Keep this as needed
export default App;
