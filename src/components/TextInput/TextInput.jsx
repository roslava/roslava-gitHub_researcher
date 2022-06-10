import React from 'react';
import classes from './TextInput.module.scss';

function TextInput({placeholder, textInputType}) {
    let textInputClasses = [classes.base, classes[textInputType]]
    return (
        <React.Fragment>
            <input type="text" placeholder={placeholder} className={textInputClasses.join(' ')}/>
        </React.Fragment>
    );
}

export default TextInput;