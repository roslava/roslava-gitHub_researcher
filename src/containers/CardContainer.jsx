import {connect} from "react-redux";
import {
    setCommentFormShow, deleteRepository,
} from "../actions/rootactions";
import Card from "../components/Card/Card";


const mapStateToProps = (state) => (
    {
        repoId: state.repoId,
        showVal: state.showVal,
        id: state.id,
        isCommentFormVisible: state.isCommentFormVisible,
    }
);


const mapDispatchToProps = (dispatch) => ({
    setCommentFormShow: (repoId, showVal) => dispatch(setCommentFormShow(repoId, showVal)),
    deleteRepository: (id) => dispatch(deleteRepository(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);