import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {ProgressSpinner} from 'primereact/progressspinner';
import MessageContainer from '../../containers/MessageContainer';
import Paginator from '../Paginator/Paginator'
import Helpers from '../../Helpers/Helpers'
import classes from './Repositories.module.scss';
import "../../global_styles/table.scss";
import {clearMessages} from "../../actions/rootactions";

const Repositories = ({
                          loading,
                          repositories,
                          filteredRepos,
                          updateSelectedRepository,
                          updateFilteredRepos,
                          warningMessage,
                          errorMessage,
                          clearMessages,
                          updateErrorState,
                          inputVal
                      }) => {

    let navigate = useHistory();

    useEffect(() => {
        updateFilteredRepos(repositories);
    }, [repositories, updateFilteredRepos, errorMessage, updateErrorState]);

    const selectRepository = async (selectedRepo) => {
        updateSelectedRepository(selectedRepo);
        clearMessages();
        navigate.push(`/repo/${selectedRepo.owner['login']}/${selectedRepo.name}`);
    }
// ***



    if (!loading && (!warningMessage || !errorMessage) && (repositories && repositories.length > 0)) {
        return (<Paginator dataFrom='fromStore' inputVal={inputVal} repositories={filteredRepos}
                           selectRepository={selectRepository}/>)
    } else if (loading && (!warningMessage || !errorMessage)) {
        return (
            <div className={classes.process}>
                <h3 className={classes.h3}>Поиск проектов...</h3>
                <ProgressSpinner stroke={'green'}/>
            </div>
        );
    } else if ((warningMessage || errorMessage) && !loading) {
        return (
            <MessageContainer/>
        );
    } else {
        if (Helpers.getLocalStorageData('repositories') === 0) {
            return (
                <div className={classes.process}>
                    <h3 className={classes.h3}>Привет, властелин GitHub!</h3>
                </div>
            );
        } else {
            return (
                <Paginator  dataFrom='fromLocalStorage' inputVal={inputVal}
                           repositories={Helpers.getLocalStorageData('repositories')}
                           selectRepository={selectRepository}/>
            );
        }
    }
}

export default Repositories;