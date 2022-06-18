export const updateLoadingState = (loadingVal) => ({
    type: "UPDATE_LOADING_STATE",
    loading: loadingVal
});

export const updateErrorState = (errorVal) => ({
    type: "UPDATE_ERROR_STATE",
    error: errorVal
});

export const updateWarningState = (warningVal) => ({
    type: "UPDATE_WARNING_STATE",
    warning: warningVal
});

export const clearMessages = () => ({
    type: "CLEAR_MESSAGES"
});

export const updateRepositories = (repos) => ({
    type: "UPDATE_REPOSITORIES",
    repositories: repos
});

export const updateFilteredRepos = (repos) => ({
    type: "UPDATE_FILTERED_REPOS",
    filteredRepos: repos
});

export const updateQueryInput = (inputValue) => ({
    type: "UPDATE_QUERY_INPUT",
    queryVal: inputValue
});

export const updateSearchHistory = (inputValue) => ({
    type: "UPDATE_SEARCH_HISTORY",
    queryVal: inputValue
});

export const updateSelectedRepo = (repository) => ({
    type: "UPDATE_SELECTED_REPO",
    selectedRepo: repository
});

export const updateSelectedRepository = (repo) => ({
    type: "UPDATE_SELECTED_REPOSITORY",
    selectedRepo: repo
});

export const updateFilterValue = (filterValue) => ({
    type: "UPDATE_FILTER_VALUE",
    filterVal: filterValue
});

export const deleteRepository = (id) => ({
    type: "DELETE_REPOSITORY",
    id: id
});

export const setCommentFormShow = (repoId, showVal) => ({
    type: "SET_COMMENT_FORM_SHOW",
    payload: {repoId: repoId, isCommentFormVisible: showVal}
});

export const setCommentFormHide = (repoId, boolVal) => ({
    type: "SET_COMMENT_FORM_HIDE",
    payload: {repoId: repoId, isCommentFormVisible: boolVal}
});

export const setQuantityOnPage = (repoQuantity) => ({
    type: "SET_QUANTITY_REPOS_ON_PAGE",
    payload: {repoQuantityPerPage: repoQuantity}
});


export const setPageNumber = (pageNumberVal) => ({
    type: "SET_PAGE_NUMBER",
    payload: {currentPageNumber: pageNumberVal}
});

export const setCommentText = (repoCommentsId, comId, commentDate, commentText) => ({
    type: "SET_COMMENT_TEXT",
    payload: {
        repoCommentsId: repoCommentsId,
        commentsId: comId,
        currentCommentText: commentText,
        currentCommentDate: commentDate
    }
});

export const setCommentAuthor = (repoCommentsId, comId, commentAuthor) => ({
    type: "SET_COMMENT_AUTHOR",
    payload: {
        repoCommentsId: repoCommentsId,
        commentsId: comId,
        currentCommentAuthor: commentAuthor,
    }
});

export const setStarStargazersCount = (repoId, countStars) => ({
    type: "SET_STAR_STARGAZERS_COUNT",
    payload: {
        repoIdStargazers: repoId,
        stargazers_count: countStars,
    }
});

export const setIconStyleClasses = (repoId, iconStyleClasses) => ({
    type: "SET_ICON_STYLE_CLASSES",
    payload: {
        repoIdStargazers: repoId,
        propertyIconStyleClasses: iconStyleClasses,
    }
});


export const setPagePaginator = (pageN) => ({
    type: "SET_PAGE_NUMBER_PAGINATOR",
    payload: {pagePaginator: pageN}
});