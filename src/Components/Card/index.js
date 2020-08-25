import React from "react";
import logo from "../../images/image1.jpg";
import "./styles.css";

const Card = ({ movies, key, history, setFavourite }) => (
  <div key={key} className="card-container">
    <div onClick={() => history.push(movies.imdbID)}>
      <img
        alt={`alt ${key}`}
        src={movies.Poster === "N/A" ? logo : movies.Poster}
      />
      <h4>{`${movies.Title} - ${movies.Year}`}</h4>
    </div>
    <div className="type-fav-wrap">
      <p>Type: {movies.Type}</p>
      <div
        onClick={() => setFavourite({ id: movies.imdbID, fav: !movies.fav })}
      >
        <i
          className={movies.fav ? "	fa fa-heart favourite" : "	fa fa-heart-o heart"}
        />
      </div>
    </div>
  </div>
);

export default Card;
