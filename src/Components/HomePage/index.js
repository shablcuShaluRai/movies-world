import React, { Component } from "react";
import Container from "../../container";
import CardList from "../CardList";
import SearchForm from "../Search";
import "./homepage.css";

export const API_KEY = "5e08209d";

class Homepage extends Component {
  state = {
    showFav: false,
    type: "",
  };

  handleState = (label, value) => this.setState({ [label]: value });

  getMovieData = async () => {
    const { search, setMoviesList } = this.props;
    const { type } = this.state;
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&type=${type}`
    );
    const result = await response.json();
    setMoviesList(result);
  };

  render() {
    const {
      search,
      moviesList,
      setSearch,
      setFavourite,
      history,
      response,
      error,
    } = this.props;
    const { showFav } = this.state;
    console.log(">>>>>>>>>>>>>>moviesList>>>>>>>>>", moviesList);
    let favouriteMovie;
    if (showFav) {
      favouriteMovie = moviesList.filter(movie => movie.fav === true);
    } else {
      favouriteMovie = moviesList;
    }
    console.log(">>>>>>favouriteMovie>>>>>>", favouriteMovie);
    return (
      <div className="homepage-wrap">
        <h1>Movies World</h1>
        <SearchForm
          setSearch={setSearch}
          search={search}
          getMovieData={this.getMovieData}
          handleState={this.handleState}
        />
        {favouriteMovie.length === 0 && <h1 className="text">You don't have any movie</h1>}
        {response ? (
            <CardList
              moviesList={favouriteMovie}
              history={history}
              setFavourite={setFavourite}
            />
        ) : (
          <h1 className="text">{error}</h1>
        )}
      </div>
    );
  }
}

export default Container(Homepage);
