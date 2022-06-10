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

export const showCommentForm = (commentData) => ({
	type: "SHOW_COMMENT_FORM",
	testData: commentData
});

export const hideCommentForm = (commentData) => ({
	type: "HIDE_COMMENT_FORM",
	testData: commentData
});



// export const showCommentForm = (commentData) => ({
// 	type: "SHOW_COMMENT_FORM",
// 	showForm: true
// });
//
// export const hideCommentForm = (commentData) => ({
// 	type: "HIDE_COMMENT_FORM",
// 	hideForm: false
// });