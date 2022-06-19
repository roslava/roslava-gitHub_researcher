import React, {useState, useEffect} from 'react';
import {AutoComplete} from 'primereact/autocomplete';
import {Button} from 'primereact/button';
import {useHistory} from 'react-router-dom';
import {getRepositories} from '../../api/RepositoryApi';
import Container from "../Layout/Container/Container";
import classes from "./Searcher.module.scss";
import Helper from "../../Helpers/Helper";


const Searcher = ({
                      loading,
                      inputVal,
                      searchHistory,
                      updateLoadingState,
                      updateQueryInput,
                      updateSelectedRepository,
                      updateFilterValue,
                      updateFilteredRepos,
                      updateSearchHistory,
                      updateRepositories,
                      clearMessages,
                      updateErrorState,
                      updateWarningState
                  }) => {
    const [query, setQuery] = useState('');
    const [queryOptions, setQueryOptions] = useState([]);
    const [searchDisabled, setSearchDisabled] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (!query || query === inputVal || loading) {
            setSearchDisabled(true);
        } else {
            if(query.length > 2){
                setSearchDisabled(false);
            }

        }
    }, [inputVal, loading, query]);

    const setSearchVal = async (e) => {
        let inputValue = e.target.value;
        setQuery(inputValue);
    }

    const filterQueries = (event) => {
        setQueryOptions(searchHistory);
    }

    const selectFromHistory = (event) => {
        let inputValue = event.value;
        initiateSearch(inputValue);
    }

    const keyUpAction = (event) => {
        event.preventDefault();
        if (event.code === "Enter" && query !== inputVal) {
            document.getElementById('repoSearch_list').style.display = 'none'
           initiateSearch(query);
        }
    }

    const submitSearch = (event, inputValue) => {
        event.preventDefault();
        initiateSearch(inputValue);
    }

    const initiateSearch = (inputValue) => {
        clearMessages();
        updateLoadingState(true);
        updateQueryInput(inputValue);
        updateSelectedRepository({});
        updateFilterValue('');
        searchRepositories(inputValue);
      }

    const searchRepositories = async (inputValue) => {
        let repos = [];
        const params = new URLSearchParams();
        if (query) {
            params.append("name", query);
        } else {
            params.delete("name");
        }
        history.push({search: params.toString()});
        await getRepositories(inputValue).then(response => {
                if (response) {
                repos = response;
                if (response.length > 0) {
                    updateSearchHistory(inputValue);
                }
                updateLoadingState(false);
                updateErrorState(null);
                updateWarningState(null);
                updateRepositories(repos);
                updateFilteredRepos(repos);
                    if (document.querySelector('.p-autocomplete-loader')) {
                        document.querySelector('.p-autocomplete-loader').style.display = 'none'
                    }
              }
        }).catch(error => {
            updateRepositories([]);
            updateFilteredRepos([]);
            updateErrorState("Looks like the chefs in the kitchen are still preparing those results. We'll check again in:");
            console.error(error);
        });
    }

    Helper.setLocalStorageData('searchInputValue', inputVal)

    return (
        <React.Fragment>
            <div className={classes.section}>
                <Container>
                    <form className={classes.block} onSubmit={(event) => {
                        submitSearch(event, query)
                    }}>
                        <div className={classes.wrapper}>
                            <AutoComplete id='repoSearch' value={query} suggestions={queryOptions}
                                          completeMethod={filterQueries} onChange={(event) => {
                                setSearchVal(event)
                            }} onSelect={(event) => {
                                selectFromHistory(event)
                            }} onKeyUp={(event) => {
                                keyUpAction(event, query)
                            }} placeholder="Начните вводить текст для поиска (не менее трех символов)..."/>
                            <Button className='search-button' disabled={searchDisabled} type="submit" label=""/>
                        </div>
                    </form>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Searcher;