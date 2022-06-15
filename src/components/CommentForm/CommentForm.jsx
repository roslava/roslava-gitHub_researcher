import React, {useEffect, useState} from 'react';
import classes from './CommentForm.module.scss';
import {RiSendPlane2Fill} from 'react-icons/ri';
import {CgClose} from 'react-icons/cg';
import Helpers from '../../helpers/Helpers'

function CommentForm({curRepoId, setCommentFormHide, setCommentText, setCommentAuthor, repoComments}) {

    const [successVisibility, setSuccessVisibility] = useState('none')

    let currentCommentsId = Helpers.idGenerator('comment');

    function commentFormHandler(event) {
        event.preventDefault()
        addCommentToLocalStorage()
        setCommentText(curRepoId, null, null, '')
        setCommentAuthor(curRepoId, null, '')
        setSuccessVisibility('flex')
        setTimeout(() => {
            setSuccessVisibility('none')
        }, 2000);
        setTimeout(() => {
            setCommentFormHide(curRepoId, false)
        }, 2000);
    }

    function addCommentToLocalStorage() {
        let allComments = [];
        // get what is already there
        if (localStorage.getItem('Comments'))
            allComments = JSON.parse(localStorage.getItem('Comments'));
        let addComment = repoComments
        allComments.push(addComment);
        localStorage.setItem('Comments', JSON.stringify(allComments));
    }


    return (
        <React.Fragment>
            <div className={classes.background}></div>

            <div className={classes.block}>
                <form onSubmit={(event) => commentFormHandler(event)} className={classes.form}>
                    <div>
                        <input hidden={true} type="text" name='name' defaultValue={curRepoId}/>
                    </div>
                    <div>
                         <textarea value={repoComments.currentCommentText || ''}
                                   onChange={(e) => setCommentText(curRepoId, currentCommentsId, new Date(), e.target.value)}
                                   minLength={10} required={true} className={classes.textarea} cols='60' maxLength='200'
                                   wrap="virtual" name='comment'
                                   placeholder='Ваш комментарий' rows="4" cols="40"></textarea>
                    </div>
                    <div>
                        <input value={repoComments.currentCommentAuthor || ''}
                               onChange={(e) => setCommentAuthor(curRepoId, currentCommentsId, e.target.value)}
                               minLength={3} required={true} className={classes.input} type="text" name='name'
                               placeholder='Ваше имя'/>
                    </div>
                    <div className={classes.buttonsholder}>
                        <button className={classes.button} type='submit'><RiSendPlane2Fill size={20}/></button>
                        <div onClick={() => setCommentFormHide(curRepoId, false)} className={classes.button}><CgClose
                            size={23}/></div>
                    </div>
                </form>
            </div>
            <div style={{display: `${successVisibility}`}} className={classes.success}><p>Ваш комментарий добавлен.</p>
                <p>Его можно прочитать</p><p>на странице репозитория.</p></div>

        </React.Fragment>
    )
}

export default CommentForm;