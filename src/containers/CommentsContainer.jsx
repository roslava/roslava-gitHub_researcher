import {connect} from "react-redux";
import {setCommentFormHide} from "../actions/rootactions";
import CommentBlock from "../components/CommentBlock/CommentBlock";

const mapStateToProps = (state) => ({
    repoId: state.repoId,
    isCommentFormVisible: state.isCommentFormVisible
})

const mapDispatchToProps = (dispatch) => ({
    setCommentFormHide: (repoId, boolVal) => dispatch(setCommentFormHide(repoId, boolVal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock);