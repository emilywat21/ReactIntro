function HomePage() {

return (
    <div>
    <h1>Movie Watchlist</h1>
    <form>
      <label htmlFor="movieInput">Movies to watch:</label>
      <input type="text" id="movieInput" name="movieInput" />
      <button type="submit">Add Movie</button>
    </form>
    <ul>
      <li>Inception</li>
      <li>The Matrix</li>
      <li>Interstellar</li>
    </ul>
  </div>
);
}

export default HomePage;