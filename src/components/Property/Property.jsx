import React, {useState} from 'react';
import classes from "./Property.module.scss";

function Property({children,count}){


const icon = [classes.icon]

    const [iconStyleClasses, setIconStyleClasses] = useState(icon)

    function toggleStyle(){
        if(iconStyleClasses.length === 1){
            icon.push(classes.active)
            return setIconStyleClasses(icon)
        }

        if(iconStyleClasses.length === 2){
            return setIconStyleClasses(iconStyleClasses.slice(0,1))
        }
    }



    return(
        <div className={classes.block}>
            <div onClick={toggleStyle} className={iconStyleClasses.join(' ')}>{children}</div>
            <div className={classes.count}>{count}</div>
        </div>
    )
}


export default Property;

