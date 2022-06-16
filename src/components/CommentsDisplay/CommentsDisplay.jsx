import React from "react";
import classes from './CommentsDisplay.module.scss'

function CommentsDisplay({selectedRepo}) {


    let allComments = []
    // get what is already there
    if (localStorage.getItem('Comments'))
        allComments = JSON.parse(localStorage.getItem('Comments'));

    let currentRepositoryComments = []


    allComments.map((comment) => {
        if (comment.repository_ID === selectedRepo.id) {
            currentRepositoryComments.push(comment)
        }
    })


    if(currentRepositoryComments.length !== 0) {

        return (
            <div className={classes.block}>
                <div className={classes.h3}>Комментарии</div>


                <div>
                    {
                        currentRepositoryComments
                            .map((comment) => {
                                return (
                                    <div className={classes.info} key={comment.commentsId}>
                                        <div className={classes.author}>{comment.currentCommentAuthor}</div>
                                        <div className={classes.comment}>{comment.currentCommentText}</div>
                                        <div className={classes.date}>{comment.currentCommentDate}</div>


                                    </div>
                                )
                            })
                    }
                </div>


            </div>

        );

    }

    return null




}

export default CommentsDisplay;
