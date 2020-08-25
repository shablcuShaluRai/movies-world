export const SAVE_MOVIES = "SAVE_MOVIES"
export const SEARCH = "SEARCH"
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"


export const setMoviesList = (moviesList) => ({
  type: SAVE_MOVIES,
  moviesList
})

export const setSearch = (search) => ({
  type: SEARCH,
  search
})


export const setFavourite = movie => ({
  type: TOGGLE_FAVOURITE,
  movie
})