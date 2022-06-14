import React from 'react';
import classes from './TextInput.module.scss';

function TextInput({placeholder, textInputType, action}) {

    let textInputClasses = [classes.base, classes[textInputType]]
    return (
        <React.Fragment>
            <input onClick={action} type="text" placeholder={placeholder} className={textInputClasses.join(' ')}/>
        </React.Fragment>
    );
}

export default TextInput;