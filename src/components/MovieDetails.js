import React, { Component } from "react";

// ======================================component for specific movie detals==================================
class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movieDetails">
        {/* ===================================component for movie details======================================== */}
        <img
          className="movieimage"
          src={
            movie.poster_path === null
              ? `https://www.flaticon.com/svg/static/icons/svg/1179/1179120.svg`
              : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          }
          style={{ height: "200px", width: "200px" }}
          alt="movie-poster"
        />
        <div className="firstinfo">
          <span className="moviename">Name: {movie.title}</span>
          <br />
          <span className="popularity">{movie.popularity}</span>
        </div>
        <div id="thirdinfo">
          <span id="moviedate">Date: {movie.release_date}</span>
          {movie.adult ? (
            <span id="foradults">Adults: Yes </span>
          ) : (
            <span id="foradults">Adults: No </span>
          )}
        </div>
        <div id="secondinfo">
          <span className="rating">Rating: {movie.vote_average}/10</span>
          <span className="totalVote">Votes: {movie.vote_count}</span>
        </div>
        <div id="movie-desc">
          <p id="movie-ovreview">
            <span>{movie.overview}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
