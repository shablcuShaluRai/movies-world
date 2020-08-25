const intialState = {
  moviesResult: {
    moviesList: [],
    response: false,
    error: "",
  },
  search: "",
};

function rootReducer(state = intialState, action) {
  switch (action.type) {
    case "SAVE_MOVIES": {
      const { Search, Response, Error } = action.moviesList;
      const movies = Search || [];
      for (let i = 0; i < movies.length; i++) {
        movies[i].fav = false;
      }
      return {
        ...state,
        moviesResult: {
          moviesList: movies,
          response: JSON.parse(Response.toLowerCase()),
          error: Error,
        },
      };
    }

    case "SEARCH":
      return {
        ...state,
        search: action.search,
      };

    case "TOGGLE_FAVOURITE": {
      const { moviesList, response, error } = state.moviesResult;
      const { id, fav } = action.movie;
      moviesList.forEach((movies, index) => {
        if (movies.imdbID === id) {
          moviesList[index].fav = fav;
        }
      });

      return {
        ...state,
        moviesResult: {
          moviesList: [...moviesList],
          response,
          error,
        },
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
