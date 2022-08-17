import React from 'react'; //import React 
//Example import of the a Component being imported as is used in the app 
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews" //You will need to import and Components (likely to be logic components from the features folder)
import { Search } from '../components/Search';
// The main app
function App() {
   return (
     //make it match the name in index.html. Components and vanilla html being used. If component then it must have been imported at top of this file
     <div className="app">
       <Search />
        <h1>Rslash Reader</h1>
        <img src="./reddit_icon.png" alt="reddit logo" width="60px" />
        <ArticlePreviews />
     </div>
    
  );
}

//Keep this as needed
export default App;
