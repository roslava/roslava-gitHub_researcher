import * as lodash from "lodash";
import {setCommentFormShow} from "../actions/rootactions";

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}


const initialState = [];

const handlers = {
    UPDATE_LOADING_STATE: (state, action) => {
        const loadingVal = action.loading;
        return Object.assign({}, state, {
            loading: loadingVal,
        });
    },
    UPDATE_ERROR_STATE: (state, action) => {
        const errorVal = action.error;
        let repos = [];
        let filteredRepos = [];
        if (errorVal) {
            repos = state.repositories;
            filteredRepos = state.filteredRepos;
        } else {
            repos = [];
            filteredRepos = [];
        }
        return Object.assign({}, state, {
            error: errorVal,
            warning: null,
            repositories: repos,
            filteredRepos: filteredRepos
        });
    },
    UPDATE_WARNING_STATE: (state, action) => {
        const warningVal = action.warning;
        return Object.assign({}, state, {
            error: null,
            warning: warningVal,
        });
    },
    CLEAR_MESSAGES: (state) => {
        return Object.assign({}, state, {
            error: null,
            warning: null,
        });
    },
    UPDATE_REPOSITORIES: (state, action) => {
        const repos = action.repositories;
        return Object.assign({}, state, {
            repositories: repos,
        });
    },
    UPDATE_FILTERED_REPOS: (state, action) => {
        const repos = action.filteredRepos;
        return Object.assign({}, state, {
            filteredRepos: repos,
        });
    },
    UPDATE_QUERY_INPUT: (state, action) => {
        let newQueryState = lodash.cloneDeep(state.searchQuery);
        const newVal = action.queryVal;
        newQueryState.input = newVal;
        return Object.assign({}, state, {
            searchQuery: newQueryState,
        });
    },
    UPDATE_SEARCH_HISTORY: (state, action) => {
        let newQueryState = lodash.cloneDeep(state.searchQuery);
        const newVal = action.queryVal;
        newQueryState.history.unshift(newVal);
        let uniqueHistoryValues = [...new Set(newQueryState.history)];
        newQueryState.history = uniqueHistoryValues;
        return Object.assign({}, state, {
            searchQuery: newQueryState,
        });
    },
    UPDATE_SELECTED_REPOSITORY: (state, action) => {
        const repo = action.selectedRepo;
        return Object.assign({}, state, {
            selectedRepo: repo
        });
    },

    UPDATE_FILTER_VALUE: (state, action) => {
        let newQueryState = lodash.cloneDeep(state.searchQuery);
        const newVal = action.filterVal;
        newQueryState.filter = newVal;
        return Object.assign({}, state, {
            searchQuery: newQueryState,
        });
    },

    DELETE_REPOSITORY: (state, action) => {

        const id = action.id

        return Object.assign({}, state, {
            repositories: state.repositories.filter(repository => repository.id !== id)
        })
    },

    SET_COMMENT_FORM_SHOW: (state, action) => {
        const repoId = action.payload.repoId
        const showVal = action.payload.showVal
        return {
            ...state,
            repositories: state.repositories.map(
                repository => repository.id === repoId
                    ? {
                        ...repository,
                        isCommentFormVisible: !showVal
                    }
                    : repository
            ),
        }
    },

    SET_COMMENT_FORM_HIDE: (state = false, action) => {
        const repoId = action.payload.repoId
        const boolVal = action.payload.showVal
        return Object.assign({}, state, {
            repositories: state. repositories.map((repository) => {
                if(repository.id === repoId ) {
                    repository.isCommentFormVisible = boolVal
                }
                return repository;
            })
        })
    },

    SET_QUANTITY_REPOS_ON_PAGE: (state, action) => {
        const repoQuantity = action.payload.repoQuantityPerPage
        return Object.assign({}, state, {
            repoQuantityPerPage: repoQuantity
        })
    },

    SET_PAGE_NUMBER: (state=0, action) => {
        const pageNumberVal = action.payload.currentPageNumber
        return Object.assign({}, state, {
            currentPageNumber: pageNumberVal
        })
    },
}





export default createReducer(initialState, handlers);