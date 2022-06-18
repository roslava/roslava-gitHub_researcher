import {connect} from "react-redux";

import {
    setPagePaginator
} from "../actions/rootactions";
import ChangerPageNumber from "../components/ChangerPageNumber/ChangerPageNumber";


const mapStateToProps = (state) => (
    {
        pagePaginator: state.pagePaginator,
    }
);



const mapDispatchToProps = (dispatch) => ({
    setPagePaginator:(pageN) => dispatch(setPagePaginator(pageN)),

});



export default connect(mapStateToProps, mapDispatchToProps)(ChangerPageNumber);