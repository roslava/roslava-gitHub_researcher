import { connect } from "react-redux";
import {
	clearMessages,
	updateErrorState,
	updateFilteredRepos,
	updateFilterValue,
	updateLoadingState,
	updateQueryInput,
	updateRepositories,
	updateSearchHistory,
	updateSelectedRepository,
	setQuantityOnPage

} from "../actions/rootactions";
import Repositories from "../components/Repositories/Repositories";

const mapStateToProps = (state) => ({
	repositories: state.repositories,
	filteredRepos: state.filteredRepos,
	selectedRepo: state.selectedRepo,
	loading: state.loading,
	searchQuery: state.searchQuery,
	inputVal: state.searchQuery.input,
	filterVal: state.searchQuery.filter,
	warningMessage: state.warning,
	errorMessage: state.error,
	repoQuantityPerPage: state.repoQuantityPerPage

});

const mapDispatchToProps = (dispatch) => ({
	updateLoadingState: (loadingVal) => dispatch(updateLoadingState(loadingVal)),
	updateErrorState: (errorMessage) => dispatch(updateErrorState(errorMessage)),
	updateRepositories: (repos) => dispatch(updateRepositories(repos)),
	updateFilteredRepos: (repos) => dispatch(updateFilteredRepos(repos)),
	updateQueryInput: (inputValue) => dispatch(updateQueryInput(inputValue)),
	updateSearchHistory: (inputValue) => dispatch(updateSearchHistory(inputValue)),
	updateSelectedRepository: (repo) => dispatch(updateSelectedRepository(repo)),
	updateFilterValue: (filterValue) => dispatch(updateFilterValue(filterValue)),
	clearMessages: () => dispatch(clearMessages()),
	setQuantityOnPage: (repoQuantity) => dispatch(setQuantityOnPage(repoQuantity))

});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);