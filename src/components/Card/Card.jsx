import React from "react";
import {MdRemoveRedEye} from 'react-icons/md';
import classes from './Card.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import CommentBlock from "../../containers/CommentsContainer";
import Stargazers from "../Stargazers/Stargazers";
import Helpers from '../../helpers/Helpers'


const Card = ({
                  repo,
                  action,
                  actionProps,
                  setCommentFormShow,
                  deleteRepository,
                  repositories,
                  dataFrom,
              }) => {

    let wrapClasses = [classes.wrapper, classes.border];


    const handlerDeleteRepository = () => {
        if (repositories.length <= 1) {
            deleteRepository(repo.id);
            localStorage.clear();
            return
        }
        deleteRepository(repo.id);
    }

    Helpers.setLocalStorageData('repositories', repositories);

    return (
        <div className={classes.column}>
            <div className={classes.card}>
                <div className={classes.headerWrapper}>
                    <h3>{repo.name}</h3>
                    <div className={classes.details} onClick={() => action(actionProps)}>Подробнее</div>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.avatar}>
                        <img src={repo.owner['avatar_url']} alt=""/>
                    </div>
                    <p>{repo.owner['login']}</p>


                    {dataFrom !== 'fromLocalStorage' ?
                        <div className={classes.removeHolder}><p onClick={() => handlerDeleteRepository()}
                                                                 className={classes.remove}>Убрать</p></div> : null}


                </div>
                <div className={classes.wrapper}>

                    <Stargazers stargazers_count={repo.stargazers_count}/>

                    <div className={classes.views}><MdRemoveRedEye size={26}/>{repo['watchers']}</div>
                </div>
                <div className={wrapClasses.join(' ')}>
                    <TextInput action = {() => setCommentFormShow(repo.id, true)} textInputType="comments" placeholder="Коментарий к проекту"/>
                    <Button btnType="comments" action={() => {
                        setCommentFormShow(repo.id, true)
                    }}/>

                    {repo.isCommentFormVisible ? <CommentBlock repoComments={repo.comments} curRepoId={repo.id} /> : null}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Card;