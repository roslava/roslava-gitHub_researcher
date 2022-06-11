import React from 'react';
import {AiFillStar} from "react-icons/ai";
import classes from "./Stargazers.module.scss";

function Stargazers({stargazers_count}){
    return(
        <div data-pr-tooltip="Starred on GitHub" className={classes.stars}>
            <AiFillStar size={26}/>
            {stargazers_count}</div>
    )
}
function mapStateToProps(state){
    // console.log('mapStateToProps >', state)
}

export default Stargazers;



