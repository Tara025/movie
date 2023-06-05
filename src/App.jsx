import { useEffect, useState } from "react";
// import './App.css'
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const API_KEY = "c3fa04022cc61abd3dfc0e587ecc408b"; // TODO: Replace with your own OMDB API key (new API-key c3fa04022cc61abd3dfc0e587ecc408b)alt:12973af6

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`
          // `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data.results)
        if  (data){
          setMovies(data.results);
          setLoading(false);
        }else {
          setError(true)
          setLoading(false);
        }

      } catch (error) {
        console.log("Fehler bei der Datenabfrage:", error);
        setError(true);
      }
  
      setLoading(false);
    }
  
    if (searchQuery) {
      fetchData();
    } else {
      setMovies([]);
      setError(false);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="main">
      <h1>Movie-App</h1>
      <SearchBar onSearch={handleSearch} />
      {!error && (
        <MovieList movies={movies} onSearch={handleSearch} />
      )}
      {loading && <p>Daten werden geladen...</p>}
      {error && <p>Diesen Titel gibt es nicht</p>}
    </div>
  );
}

export default App;
