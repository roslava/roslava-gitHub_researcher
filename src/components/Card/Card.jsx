import React from "react";
import {AiFillStar} from 'react-icons/ai';
import {MdRemoveRedEye} from 'react-icons/md';
import classes from './Card.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import CommentBlock from "../CommentBlock/CommentBlock";
import {useState} from "react";


function Card({repo, action, actionProps}) {

    let wrapClasses = [classes.wrapper, classes.border]


    //
    const [toggle, setToggle] = useState(false);

    const toggleChanger = () =>{
        // e.target.preventDefault()
        setToggle(true)}






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
                </div>
                <div className={classes.wrapper}>
                    <div data-pr-tooltip="Starred on GitHub" className={classes.stars}><AiFillStar
                        size={26}/>{repo['forks_count']}</div>
                    <div className={classes.views}><MdRemoveRedEye size={26}/>{repo['watchers']}</div>
                </div>
                <div className={wrapClasses.join(' ')}>
                    <TextInput textInputType="comments" placeholder="Коментарий к проекту"/>
                    <Button btnType="comments" action={toggleChanger} />

                    {toggle ? <CommentBlock/> : null}

                </div>

                <div></div>

            </div>
        </div>
    )
}

export default Card;