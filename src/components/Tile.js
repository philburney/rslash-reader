//Tile component
import React from "react";

export const Tile = ({article}) => {
    const {permalink,thumbnail, subreddit,title}= article;

    return (
    <>
    <div name="tile" className="tilearea">
        <li className="tile">
            <a href={permalink} target="_isblank">
                 <h3>{title}</h3>
                <p className="sub">{subreddit}</p>
                <img src={thumbnail} alt="" />
            </a>
        </li>
    </div>
    </>
      )
}
