import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery("");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input"
        type="text"
        placeholder="Titelname"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Suchen</button>
    </form>
  );
}

export default SearchBar;
