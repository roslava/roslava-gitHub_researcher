import { connect } from "react-redux";
import { clearMessages, updateErrorState, updateFilteredRepos, updateFilterValue, updateLoadingState, updateQueryInput, updateRepositories, updateSearchHistory, updateSelectedRepository, updateWarningState } from '../actions/rootactions';
import Searcher from "../components/Searcher/Searcher";

const mapStateToProps = (state) => ({
	repositories: state.repositories,
	filteredRepos: state.filteredRepos,
	loading: state.loading,
	searchQuery: state.searchQuery,
	searchHistory: state.searchQuery.history,
	inputVal: state.searchQuery.input
});

const mapDispatchToProps = (dispatch) => ({
	updateLoadingState: (loadingVal) => dispatch(updateLoadingState(loadingVal)),
	updateWarningState: (message) => dispatch(updateWarningState(message)),
	updateErrorState: (errorMessage) => dispatch(updateErrorState(errorMessage)),
	updateRepositories: (repos) => dispatch(updateRepositories(repos)),
	updateSelectedRepository: (repo) => dispatch(updateSelectedRepository(repo)),
	updateFilterValue: (filterValue) => dispatch(updateFilterValue(filterValue)),
	updateFilteredRepos: (repos) => dispatch(updateFilteredRepos(repos)),
	updateQueryInput: (inputValue) => dispatch(updateQueryInput(inputValue)),
	updateSearchHistory: (inputValue) => dispatch(updateSearchHistory(inputValue)),
	clearMessages: () => dispatch(clearMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);