import React from 'react';
import classes from './TextInput.module.scss';

function TextInput({placeholder, textInputType, action, disabled, textColor}) {

    let colors = (textColor) => {
        if(textColor === 'white'){
            return '#ffffff'
        }
    }

    let textInputClasses = [classes.base, classes[textInputType]]
    return (
        <React.Fragment>
            <input style={{color:colors(textColor)}} disabled={disabled} onClick={action} type="text" placeholder={placeholder} className={textInputClasses.join(' ')}/>
        </React.Fragment>
    );
}

export default TextInput;