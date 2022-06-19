import {connect} from "react-redux";
import {setQuantityOnPage} from "../actions/rootactions";
import DropDownPagesQuantity from '../components/DropDownPagesQuantity/DropDownPagesQuantity'

const mapStateToProps = (state) => (
    {
        repoQuantityPerPage: state.repoQuantityPerPage,
        repoQuantity: state.repoQuantity
    }
);

const mapDispatchToProps = (dispatch) => ({
    setQuantityOnPage: (repoQuantity) => dispatch(setQuantityOnPage(repoQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownPagesQuantity);