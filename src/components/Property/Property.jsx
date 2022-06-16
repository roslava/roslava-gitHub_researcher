import React, {useState} from 'react';
import classes from "./Property.module.scss";

function Property({children, count, repoID, setStarStargazersCount,setIconStyleClasses, propertyIconStyleClasses}) {

const styleClasses = [classes.icon, propertyIconStyleClasses]

    function toggleStyle() {
        if (propertyIconStyleClasses.length === 0) {
            setIconStyleClasses(repoID, [classes.active])
            return setStarStargazersCount(repoID, count+1)
           }

        if (propertyIconStyleClasses.length === 1) {
            setIconStyleClasses(repoID, [])
            return setStarStargazersCount(repoID, count-1)
        }
        setIconStyleClasses(repoID, [classes.active])
    }

    return (
        <div className={classes.block}>
            <div onClick={toggleStyle} className={styleClasses.join(' ')}>{children}</div>
            <div className={classes.count}>{count}</div>
        </div>
    )
}

export default Property;

