import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div className="movieDetails">
          <img
            className="movieimage"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ height: "500px", width: "600px" }}
            alt="movie-poster"
          />
          <div className="firstinfo">
            <span className="moviename">{movie.title}</span>
            <span className="popularity">{movie.popularity}</span>
          </div>
          <div id="thirdinfo">
            <span id="moviedate">{movie.release_date}</span>
            {movie.adult ? (
              <span id="foradults"> Yes </span>
            ) : (
              <span id="foradults"> Yes </span>
            )}
          </div>
          <div id="secondinfo">
            <span className="rating">{movie.vote_average}/10</span>
            <span className="totalVote">{movie.vote_count}</span>
          </div>
          <div id="movie-desc">
            <p id="movie-ovreview">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
