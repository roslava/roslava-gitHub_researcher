import React from "react";
import {MdRemoveRedEye} from 'react-icons/md';
import classes from './Card.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import CommentBlock from "../../containers/CommentsContainer";
import Property from "../../containers/PropertyContainer";
import Helper from '../../Helpers/Helper'
import {AiFillStar} from "react-icons/ai";

const Card = ({
                  repo,
                  action,
                  actionProps,
                  setCommentFormShow,
                  deleteRepository,
                  repositories,
                  dataFrom,
                  setStargazersCount,
                  setWatchersCount,
                  setStarClasses,
                  setWatchersClasses

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
    Helper.setLocalStorageData('repositories', repositories);

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


                    <div className={classes.removeHolder}>
                        <p onClick={() => handlerDeleteRepository()}
                           className={classes.remove}>Убрать</p></div>
                </div>


                <div className={classes.wrapper}>

                    <Property
                        repoID={repo.id}
                        what='stargazers'
                        style={repo.propertyStyles.stargazers}
                        count={repo['stargazers_count']}>
                        <AiFillStar size={26}/>
                    </Property>

                    <Property
                        repoID={repo.id}
                        what='watchers'
                        style={repo.propertyStyles.watchers}
                        count={repo['watchers_count']}>
                        <MdRemoveRedEye size={26}/>
                    </Property>

                </div>
                <div className={wrapClasses.join(' ')}>
                    <TextInput textColor={'white'} disabled={false} action={() => setCommentFormShow(repo.id, true)}
                               textInputType="comments"
                               placeholder="Коментарий к проекту"/>
                    <Button btnType="comments" action={() => {
                        setCommentFormShow(repo.id, true)
                    }}/>

                    {repo.isCommentFormVisible ?
                        <CommentBlock repoComments={repo.comments} curRepoId={repo.id}/> : null}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Card;