import React from 'react';
import classes from './CommentBlock.module.scss';
import {RiSendPlane2Fill} from 'react-icons/ri';
import {CgClose} from 'react-icons/cg';
import Button from "../Button/Button";






function CommentBlock({curRepoId, setCommentFormHide}) {


    function commentFormHandler(){

    }

console.log('l', curRepoId)

    // const toggleChanger = () => {
    //     setCommentFormHide(repoId, false);
    // }



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
                        <button  className={classes.button} type='submit'><RiSendPlane2Fill size={20}/></button>
                        <div onClick={()=>setCommentFormHide(curRepoId, false)} className={classes.button}><CgClose size={23}/></div>
                        {/*<Button btnType="comments" action={toggleChanger}/>*/}
                    </div>
                </form>
            </div>
        </React.Fragment>


    )
}

export default CommentBlock;

