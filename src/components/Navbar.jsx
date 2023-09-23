const Navbar = (props) => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
        />
        <p className="num-results">
          Found{" "}
          <strong>{props.result.length > 0 ? props.result.length : "0"}</strong>{" "}
          results
        </p>
      </nav>
    </>
  );
};

export default Navbar;
