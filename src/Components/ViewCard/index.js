import React, { useState, useEffect } from "react";
import "./viewCard.css";

export const API_KEY = "5e08209d";

const labelValue = (label, value) => (
  <div className="label-value-wrapper">
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
);

function ViewCard({ history }) {
  const path = history && history.location.pathname;
  const id = path.split("/")[1];
  const [movieData, setMoviesData] = useState({});

  const getMovieData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    const result = await response.json();
    setMoviesData(result);
  };

  useEffect(() => {getMovieData()}, [id]);
  const {
    Title,
    Writer,
    Poster,
    Released,
    Actors,
    Plot,
    Language,
    Awards,
    imdbRating,
    Director,
    Genre,
  } = movieData;
  return (
    <div className="view-card-wrap">
      <div>
        <img alt={Title} src={Poster} />
      </div>
      <div className="movie-details">
        {labelValue("Title", Title)}
        {labelValue("Plot", Plot)}
        {labelValue("Language", Language)}
        {labelValue("Genre", Genre)}
        {labelValue("Actors", Actors)}
        {labelValue("Released", Released)}
        {labelValue("imdbRating", imdbRating)}
        {labelValue("Awards", Awards)}
        {labelValue("Writer", Writer)}
        {labelValue("Director", Director)}
      </div>
    </div>
  );
}

export default ViewCard;
