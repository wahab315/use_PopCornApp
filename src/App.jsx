import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchItem from "./components/SearchItem";
import { useMovie } from "./hooks/useMovies";
import Summary from "./components/Summary";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [inputQuery, setInputQuery] = useState("");

  // custome Hooks

  const { movies, isLoading, error } = useMovie(inputQuery);

  const [showSearchResult, setShowSearchResult] = useState(true);
  const [showWatchList, setShowWatchList] = useState(true);


  return (
    <>
      <Navbar query={inputQuery} setQuery={setInputQuery} result={movies} />
      <h1>{inputQuery}</h1>
      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setShowSearchResult(!showSearchResult)}
          >
            {showSearchResult ? "-" : "+"}
          </button>

          {showSearchResult && (
            <>
              {isLoading && <Loading />}
              <ul className="list">
                {!isLoading &&
                  !error &&
                  movies?.map((item) => (
                    <SearchItem
                      key={item.imdbID}
                      name={item.Title}
                      image={item.Poster}
                      year={item.Year}
                    />
                  ))}
              </ul>
              {error && <ErrorMessage message={error} />}
            </>
          )}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setShowWatchList(!showWatchList)}
          >
            {showWatchList ? "-" : "+"}
          </button>

          {showWatchList && (
            <>
              <Summary />

              {/* <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul> */}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
