import React from 'react';
import classes from "./Property.module.scss";
import {setStarClasses, setWatchersClasses} from "../../actions/rootactions";

function Property({children, repoID, what, style, count,setStarClasses, setWatchersClasses,setWatchersCount, setStargazersCount}) {

    function forWhatIsSet(what){
        if(what === 'stargazers') return{setCount:setStargazersCount, setStyle:setStarClasses}
        if(what === 'watchers') return{setCount:setWatchersCount, setStyle:setWatchersClasses}

    }

const styleClasses = [classes.icon, style]

    function toggleStyle() {
        if (style.length === 0 || !style) {
            forWhatIsSet(what).setStyle(repoID, [classes.active])
            return forWhatIsSet(what).setCount(repoID, count+1)
           }

        if (style.length === 1) {

            forWhatIsSet(what).setStyle(repoID, [])
            return forWhatIsSet(what).setCount(repoID, count-1)
            }
        forWhatIsSet(what).setStyle(repoID, [classes.active])
    }

    return (
        <div className={classes.block}>
            <div onClick={toggleStyle} className={styleClasses.join(' ')}>{children}</div>
            <div className={classes.count}>{count}</div>
        </div>
    )
}

export default Property;