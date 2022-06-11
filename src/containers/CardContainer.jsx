import { connect } from "react-redux";
import {
    setCommentFormShow,
    deleteRepository,
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
import Card from "../components/Card/Card";




const mapStateToProps = (state) => (

    {

        commentFormShow: state.commentFormShow,

    }

);




const mapDispatchToProps = (dispatch) => ({
    setCommentFormShow: (showVal) => dispatch(setCommentFormShow (showVal) ),
    deleteRepository: (id) => dispatch(deleteRepository(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Card);