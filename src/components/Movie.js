import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  // ===============================handler to show movie details=====================================

  openDetails = () => {
    this.setState({
      showDetails: true,
    });
  };

  closeDetail = () => {
    this.setState({
      showDetails: false,
    });
  };

  render() {
    const { movie } = this.props;
    const { showDetails } = this.state;

    return (
      <div id="movie-box">
        {/* ==========================================components for separate movie card=============================== */}

        <div className="movieCard" onClick={this.openDetails}>
          <img
            className="movieimage"
            src={
              movie.poster_path === null
                ? `https://www.flaticon.com/svg/static/icons/svg/1179/1179120.svg`
                : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }
            style={{ height: "200px", width: "150px" }}
            alt="movie-poster"
          />
          <div className="firstinfo">
            <span className="moviename">Name: {movie.title}</span>
            <br />
            <span className="popularity">Popularity: {movie.popularity}</span>
          </div>
        </div>

        {showDetails && (
          <div id="showdetails">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/106/106830.svg"
              style={{ height: "24px", width: "24px" }}
              onClick={this.closeDetail}
              alt="close button"
            />
            <MovieDetails movie={movie} />
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
