import { useState } from "react";


function MovieList({ movies }) {
  const [list, setList] = useState(null);


  const handleList = (movie) => {
    setList(movie);
  };

  const handleButton = () => {
    setList(null);
  };

  const handleSearch = (query) => {
    const foundMovie = movies.find((movie) => movie.original_title === query);
    if (foundMovie) {
      setList(foundMovie);
    } else {
      setList(null);
    }
  };

  const imgURL = "https://image.tmdb.org/t/p/"; //API hat für Bilder relative Pfade, deshalb muss man diesen Umweg gehen
  const imgSize = "w300"; //API bedingte Größenangabe
  const imgSizeGreat = "w500";//für größeres Bild in sep. Browser

 
  if (list) {
    return (
      <>
        <div className="selectList">
        
          <h3>
            {list.original_title} ({list.release_date})
          </h3>
          <a
            href={`${imgURL}${imgSizeGreat}${list.poster_path}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${imgURL}${imgSize}${list.poster_path}`}
              alt={`Poster`}
             
            />
          </a>
          <p>{list.overview}</p>
          <button onClick={handleButton}>Back</button>
        </div>
       
      </>
    );
  }



  return (
    <>
      <div className="liste">
      
        <ol>
          {movies.map((movie, index) => (
            <li key={index} onClick={() => handleList(movie)}>
              {movie.original_title} ({movie.release_date})
            </li>
          ))}
        </ol>
      </div>
    </>
  );

  // return (
  //   <div>
  //     {/* Display an appropriate message or fallback UI */}
  //     {error ? <p>{error}</p> : <p>No movies found.</p>}
  //   </div>
  // );
  // }
}

export default MovieList;
