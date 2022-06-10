import { connect } from "react-redux";
import {
	hideCommentForm,
	showCommentForm,
	updateFilteredRepos,
	updateFilterValue,
	updateLoadingState,
	updateQueryInput,
	updateRepositories,
	updateSearchHistory,
	updateSelectedRepository
} from "../actions/rootactions";
import Repository from "../components/Repository/Repository";
import {getStore} from "../reducers/store";

const mapStateToProps = (state) => ({
	repositories: state.repositories,
	filteredRepos: state.filteredRepos,
	selectedRepo: state.selectedRepo,
	loading: state.loading,
	searchQuery: state.searchQuery,
	inputVal: state.searchQuery.input,
	filterVal: state.searchQuery.filter,
	commentData: state.commentData
});

const mapDispatchToProps = (dispatch) => ({
	updateLoadingState: (loadingVal) => dispatch(updateLoadingState(loadingVal)),
	updateRepositories: (repos) => dispatch(updateRepositories(repos)),
	updateFilteredRepos: (repos) => dispatch(updateFilteredRepos(repos)),
	updateQueryInput: (inputValue) => dispatch(updateQueryInput(inputValue)),
	updateSearchHistory: (inputValue) => dispatch(updateSearchHistory(inputValue)),
	updateSelectedRepository: (repo) => dispatch(updateSelectedRepository(repo)),
	updateFilterValue: (filterValue) => dispatch(updateFilterValue(filterValue)),
	showCommentForm:(commentData) => dispatch(showCommentForm(commentData)),
	// hideCommentForm:(commentData) => dispatch(hideCommentForm(commentData)),
	hideCommentForm:(commentData) => dispatch(hideCommentForm(commentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);