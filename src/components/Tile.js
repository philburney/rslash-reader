//Tile component
import React from "react";

export const Tile = ({article}) => {
    const {permalink,thumbnail, subreddit,title}= article;
       const subredditUrl = "https://reddit.com/" + subreddit;
    return (
    <>
    <div name="tile" className="tilearea">
        <li className="tile">
                 <a href={permalink} target="_isblank">
                    <h3>{title}</h3>
                 </a>
                 <a href={subredditUrl} target="_isblank">
                    <p className="sub">{subreddit}</p>
                </a>
                <a href={permalink} target="_isblank">
                    <img src={thumbnail} alt="" />
                </a>
           
        </li>
    </div>
    </>
      )
}
