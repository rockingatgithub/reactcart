import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      totalMovies: 0,
      movieList: new Array(0),
      showDetails: false,
    };
  }

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
            showList: false,
            totalMovies: 0,
            movieList: movies.results,
          });
          console.log(url);
          console.log(movies);
        } else {
          this.setState({
            showList: true,
            totalMovies: movies.total_results,
            movieList: movies.results,
          });
          console.log(url);
          console.log(movies);
        }
      });
  };

  render() {
    const { showList, movieList, totalMovies } = this.state;
    return (
      <div className="App">
        <div id="seacrh-bar">
          <form id="search-form">
            <input
              type="text"
              name="search"
              onChange={this.handleSearch}
              placeholder="Enter movie name"
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div id="movielist">
          {totalMovies !== 0 && <h3 id="moviescount">{totalMovies}</h3>}
          {showList &&
            movieList &&
            movieList.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default App;
