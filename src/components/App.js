import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    // =======================initial state =========================================================

    this.state = {
      showList: false,
      totalMovies: 0,
      movieList: new Array(0),
      showDetails: false,
      initial: true,
    };
  }

  // ================================movies search handler================================================

  handleSearch = async (e) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=e08d15260b80f4fba575a381012e7ce8&query=${e.target.value}`;
    await fetch(url)
      .then((res) => res.json())
      .then((movies) => {
        if (movies === undefined) {
          movies = {
            results: [],
          };
          this.setState({
            initial: false,
            showList: false,
            totalMovies: 0,
            movieList: movies.results,
          });
          console.log(url);
          console.log(movies);
        } else {
          this.setState({
            initial: false,
            showList: true,
            totalMovies: movies.total_results,
            movieList: movies.results,
          });
          console.log(url);
          console.log(movies);
        }
      });
  };

  // =============================main app component==========================================

  render() {
    const { showList, movieList, totalMovies, initial } = this.state;
    return (
      <div className="App">
        <div id="seacrh-bar">
          <h1 id="app-heading">WELCOME TO REACTCART </h1>

          {initial && (
            <div id="initial-message-box">Enter movie name in search bar</div>
          )}

          <div id="search-box">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/149/149852.svg"
              alt="search-icon"
              style={{ height: "20px", width: "20px" }}
              id="seacrh-icon"
            />
            <input
              type="text"
              name="search"
              onChange={this.handleSearch}
              placeholder="Enter movie name........"
              id="search-input"
            />
          </div>
        </div>

        {/* =================================components for movies search list=============================================== */}

        {totalMovies !== 0 && (
          <span id="moviescount">{totalMovies} movies found</span>
        )}
        <div id="movielist">
          {showList &&
            movieList &&
            movieList.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default App;
