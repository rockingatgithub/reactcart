import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  openDetails = () => {
    this.setState({
      showDetails: true,
    });
  };

  render() {
    const { movie } = this.props;
    const { showDetails } = this.state;

    return (
      <div>
        <div className="movieCard" onClick={this.openDetails}>
          <img
            className="movieimage"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ height: "400px", width: "400px" }}
            alt="movie-poster"
          />
          <div className="firstinfo">
            <span className="moviename">{movie.title}</span>
            <span className="popularity">{movie.popularity}</span>
          </div>
        </div>

        {showDetails && (
          <div id="showdetails">
            <MovieDetails movie={movie} />
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
