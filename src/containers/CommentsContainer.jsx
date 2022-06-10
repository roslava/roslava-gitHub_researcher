import{connect} from"react-redux";
import {showCommentForm, hideCommentForm, updateErrorState} from "../actions/rootactions";
import CommentBlock from "../components/CommentBlock/CommentBlock";


const mapStateToProps = (state) => ({
    commentData: state.commentData
})

const mapDispatchToProps =(dispatch) => ({
    showCommentForm: (message) => dispatch(showCommentForm(message)),
    hideCommentForm: (message) => dispatch(hideCommentForm(message)),
})







export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock);