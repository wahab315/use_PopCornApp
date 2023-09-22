import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchItem from "./components/SearchItem";

function App() {
  const [inputQuery, setInputQuery] = useState("");

  const [showSearchResult, setShowSearchResult] = useState(true);
  const [showWatchList, setShowWatchList] = useState(true);

  return (
    <>
      <Navbar query={inputQuery} setQuery={setInputQuery} />
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
            <ul className="list">
              <SearchItem name="Spider man" year="2022" />
            </ul>
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
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>Movie length movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>5</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>2</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>54 min</span>
                  </p>
                </div>
              </div>

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
