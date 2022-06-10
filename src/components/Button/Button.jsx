import React from 'react';
import classes from './Button.module.scss';



function Button({name, btnType, action, actionProps}) {
    let buttonClasses = [classes.base, classes[btnType]]
    return (
        <button onClick={() => action(actionProps)} className={buttonClasses.join(' ')}>
            {name}
        </button>
    );
}

export default Button;