import {connect} from "react-redux";
import {setPageNumber, setQuantityOnPage} from "../actions/rootactions";
import Paginator from '../components/Paginator/Paginator'

const mapStateToProps = (state) => (
    {
        repoQuantityPerPage: state.repoQuantityPerPage,
        repoQuantity: state.repoQuantity,
        currentPageNumber: state.currentPageNumber

    }
);

const mapDispatchToProps = (dispatch) => ({
    setQuantityOnPage: (repoQuantity) => dispatch(setQuantityOnPage(repoQuantity)),
    setPageNumber: (pageNumberVal) => dispatch(setPageNumber(pageNumberVal)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Paginator);