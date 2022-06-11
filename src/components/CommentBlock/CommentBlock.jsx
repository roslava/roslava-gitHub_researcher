import React from 'react';
import {useState} from "react";
import classes from './CommentBlock.module.scss';

import {RiSendPlane2Fill} from 'react-icons/ri';
import {CgClose} from 'react-icons/cg';








function CommentBlock({commentData}) {

    function commentFormHandler(){
        // console.log(commentData)
    }



    return (
        <React.Fragment>

<div className={classes.background}></div>

            <div className={classes.block}>
                <form onSubmit={commentFormHandler} className={classes.form}>
                    <div>
                        <input hidden={true} type="text" name='name' defaultValue='345345fff'/>
                    </div>
                    <div>
                         <textarea minLength={10} required={true} className={classes.textarea} cols='60' maxLength='200'
                                   wrap="virtual" name='comment'
                                   placeholder='Ваш комментарий' rows="4" cols="40"></textarea>
                    </div>
                    <div>
                        <input minLength={3} required={true} className={classes.input} type="text" name='name'
                               placeholder='Ваше имя'/>
                    </div>
                    <div className={classes.buttonsholder}>
                        <button className={classes.button} type='submit'><RiSendPlane2Fill size={20}/></button>
                        <div className={classes.button}><CgClose size={23}/></div>
                    </div>
                </form>
            </div>
        </React.Fragment>


    )
}

export default CommentBlock;

