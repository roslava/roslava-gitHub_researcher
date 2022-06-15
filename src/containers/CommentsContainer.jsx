import {connect} from "react-redux";
import {setCommentAuthor, setCommentFormHide, setCommentText} from "../actions/rootactions";
import CommentForm from "../components/CommentForm/CommentForm";

const mapStateToProps = (state) => ({
    repoId: state.repoId,
    isCommentFormVisible: state.isCommentFormVisible,
    currentCommentText: state.currentCommentText,
    currentCommentAuthor: state.currentCommentAuthor,
    comments: state.comments,
    commentsId: state.commentsId,
  })





const mapDispatchToProps = (dispatch) => ({
    setCommentFormHide: (repoId, boolVal) => dispatch(setCommentFormHide(repoId, boolVal)),
    setCommentText: (repoCommentsId, comId, commentDate, commentText) => dispatch(setCommentText(repoCommentsId, comId, commentDate, commentText)),
    setCommentAuthor: (repoCommentsId, comId, commentAuthor) => dispatch(setCommentAuthor(repoCommentsId, comId, commentAuthor)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);