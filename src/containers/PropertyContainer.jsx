import {connect} from "react-redux";
import {
    setIconStyleClasses,
    setStarStargazersCount
} from "../actions/rootactions";
import Property from "../components/Property/Property";

const mapStateToProps = (state) => (
    {
        repoIdStargazers: state.repoIdStargazers,
        stargazers_count: state.stargazers_count,
    }
);

const mapDispatchToProps = (dispatch) => ({
    setStarStargazersCount: (repoId, countStars) => dispatch(setStarStargazersCount(repoId, countStars)),
    setIconStyleClasses: (repoId, iconStyleClasses) => dispatch(setIconStyleClasses(repoId, iconStyleClasses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);