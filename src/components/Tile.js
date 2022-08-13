//Tile component
import React from "react";

export const Tile = ({article}) => {
    const {permalink,thumbnail, subreddit,title}= article;

    return (
    <>
    <div name="tile" >
        <li >
            <a href={permalink} target="_isblank"> <h3>{title}</h3>
                <p name="sub">{subreddit}</p>
                <br></br>
                <img src={thumbnail} alt="" />
            </a>
        </li>
    </div>
    </>
      )
}
