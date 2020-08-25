import React from "react";
import Card from "../Card";
import "./styles.css";

const CardList = props => (
  <div className="card-list-container">
    {props.moviesList && props.moviesList.map(movies => (
      <Card
        key={movies.imdbID}
        movies={movies}
        history={props.history}
        fav={props.fav}
        setFav={props.setFav}
        setFavourite={props.setFavourite}
      />
    ))}
  </div>
);

export default CardList;
