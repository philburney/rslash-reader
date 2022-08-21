import React from 'react';
import { useHistory} from 'react-router-dom';


export const Nav =  () => {
    const history = useHistory();

    function handleClick() {
      history.push("/");
    }



 return (
    <nav> 
    <button className="homebutton" onClick={handleClick}><img src='./home.png' alt="home button" className="homeicon"></img></button>
    </nav>
 )
}