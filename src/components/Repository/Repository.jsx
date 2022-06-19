import React, {useCallback, useEffect, useState} from "react";
import {ProgressSpinner} from 'primereact/progressspinner';
import {Chip} from 'primereact/chip';
import "../../global_styles/hero.scss";
import "../../global_styles/messages.scss";
import {useParams} from 'react-router-dom';
import {getRepository} from "../../api/RepositoryApi";
import Container from '../Layout/Container/Container';
import {useHistory} from "react-router-dom";
import classes from './Repository.module.scss'
import {MdOutlineArrowBack} from 'react-icons/md';
import {DiGithubAlt} from 'react-icons/di';
import CommentsDisplay from '../CommentsDisplay/CommentsDisplay'

const Repository = ({loading, selectedRepo, updateLoadingState, updateSelectedRepository}) => {
    let {owner} = useParams();
    let {name} = useParams();
    let history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    const getRepoFromUrl = useCallback(
        () => {
            getRepository(owner, name).then(response => {
                if (response.data && response.data.id) {
                    updateLoadingState(false);
                    updateSelectedRepository(response.data);
                }
            })
        },
        [owner, name, updateLoadingState, updateSelectedRepository],
    );

    useEffect(() => {
        if (!selectedRepo.id) {
            if (owner && name) {
                return getRepoFromUrl(owner, name);
            } else {
                updateLoadingState(false);
            }
        } else {
            return selectedRepo;
        }
    }, [loading, name, owner, selectedRepo, updateLoadingState, getRepoFromUrl]);

    const selectRepository = async (selectedRepo) => {
        window.location.href = `https://github.com/${selectedRepo.owner.login}/${selectedRepo.name}`;
    }

    if (!loading && (selectedRepo && selectedRepo.id)) {
        return (
            <Container>
                <div className={classes.block}>
                    <button onClick={history.goBack} className={classes.back}><span><MdOutlineArrowBack size={'20px'}
                                                                                                        fill={'#00A3FF'}/></span>Вернуться
                        к поиску
                    </button>
                    <div className={classes.content}>
                        <div className={classes.repoDescription}>
                            <div className={classes.h3}>{selectedRepo.name}</div>
                            <span className={classes.h4}>{selectedRepo.owner.login}</span>
                            <p className={classes.lead}>{selectedRepo.description}</p>
                            <div className={classes.topic}>
                                {selectedRepo.topics.map((topic) => <Chip key={topic} label={topic}
                                                                          className={classes.topicItem}/>)}
                            </div>
                            <button className={classes.source}
                                    onClick={() => {
                                        selectRepository(selectedRepo);
                                    }}
                            ><span><DiGithubAlt size={'60px'} fill={'#ffffff'}/></span>Посмотреть репозиторй
                            </button>
                        </div>
                        <div className={classes.avatarBigBlock}>
                            <div className={classes.avatarHolder}>
                                <img className={classes.avatarBigImg} src={selectedRepo.owner.avatar_url} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                    <CommentsDisplay selectedRepo={selectedRepo}/>
                    <button onClick={history.goBack} className={classes.back}><span><MdOutlineArrowBack size={'20px'}
                                                                                                        fill={'#00A3FF'}/></span>Вернуться
                        к поиску
                    </button>
                </div>
            </Container>
        )
    } else if (loading) {
        return (
            <ProgressSpinner/>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Repository