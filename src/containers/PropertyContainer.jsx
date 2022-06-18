import {connect} from "react-redux";
import {
    setStarClasses, setStargazersCount, setWatchersCount, setWatchersClasses
} from "../actions/rootactions";
import Property from "../components/Property/Property";

const mapStateToProps = (state) => (
    {
        repoIdStargazers: state.repoIdStargazers,
        stargazers_count: state.stargazers_count,
        watchers_count: state.watchers_count,
        propertyStarsClasses: state.propertyStarsClasses,
        propertyWatchersClasses: state.propertyWatchersClasses
    }
);

const mapDispatchToProps = (dispatch) => ({
    setStargazersCount: (repoId, countStars) => dispatch(setStargazersCount(repoId, countStars)),
    setWatchersCount: (repoId, countWatchers) => dispatch(setWatchersCount(repoId, countWatchers)),
    setStarClasses: (repoId, stylesS) => dispatch(setStarClasses(repoId, stylesS)),
    setWatchersClasses: (repoId, stylesW) => dispatch(setWatchersClasses(repoId, stylesW)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);