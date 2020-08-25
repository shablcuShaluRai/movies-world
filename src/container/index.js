import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSearch, setMoviesList, setFavourite } from "./action";

function mapStateToProps(state) {
  const { search, moviesResult } = state;
  const { moviesList, response, error } = moviesResult;
  return {
    search,
    moviesList,
    response,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setMoviesList,
      setSearch,
      setFavourite,
    },
    dispatch
  );
}

const Container = connect(mapStateToProps, mapDispatchToProps);

export default Container;
