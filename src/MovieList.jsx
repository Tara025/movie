import { useState, useCallback, useEffect } from "react";
import Modal from "./Modal.jsx"; // Modal importieren

function MovieList({ movies }) {
  const [list, setList] = useState(null); // Zustand für den ausgewählten Film
  const [query, setQuery] = useState(""); // Zustand für die Suchanfrage
  const [isModalOpen, setIsModalOpen] = useState(false); // Zustand für Modal
  const [modalImgSrc, setModalImgSrc] = useState(""); // Zustand für das Bild im Modal

  // Funktion zum Setzen der Filmliste
  const handleList = useCallback((movie) => {
    // Setze den Zustand des ausgewählten Films
    setList(movie);
    // Setze den Zustand in der History API (state und url)
    window.history.pushState(
      { movie: movie.original_title },
      "",
      `#movie-${movie.id}`
    );
  }, []);

  // Funktion zum Zurücksetzen der Filmliste
  const handleButton = useCallback(() => {
    setList(null); // Setzt den Zustand zurück, um die MovieList anzuzeigen
    window.history.pushState({}, "", "/"); // Zurück zur Hauptseite
  }, []);

  // Funktion zum Suchen eines Films
  // const handleSearch = useCallback(
  //   (query) => {
  //     const foundMovie = movies.find((movie) => movie.original_title === query);
  //     if (foundMovie) {
  //       setList(foundMovie);
  //       window.history.pushState({ movie: foundMovie.original_title }, "", `#movie-${foundMovie.id}`);
  //     } else {
  //       setList(null);
  //     }
  //   },
  //   [movies]
  // );

  // Funktion zum Öffnen des Modals
  const handleImageClick = useCallback((imgSrc) => {
    setModalImgSrc(imgSrc);
    setIsModalOpen(true); // Öffnet das Modal
  }, []);

  // Funktion zum Schließen des Modals
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false); // Schließt das Modal
  }, []);

  // Event-Listener für das Vor-/Zurück-Navigieren des Browsers
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.movie) {
        // Wenn ein Movie im State ist, diesen anzeigen
        const foundMovie = movies.find(
          (movie) => movie.original_title === event.state.movie
        );
        setList(foundMovie || null);
      } else {
        // Wenn kein Movie im State ist, gehe zurück zur Filmliste
        setList(null);
      }
    };

    // Popstate Event bei Back/Forward-Navigation hinzufügen
    window.addEventListener("popstate", handlePopState);

    // Cleanup Funktion, um den Event-Listener zu entfernen
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [movies]);

  const imgURL = "https://image.tmdb.org/t/p/";
  const imgSize = "w300";
  const imgSizeGreat = "w500";

  // Wenn ein Film ausgewählt wurde, wird dieser Bereich angezeigt
  if (list) {
    return (
      <>
        <div className="selectList">
          <h3>
            {list.original_title} ({list.release_date})
          </h3>
          <img
            src={`${imgURL}${imgSize}${list.poster_path}`}
            alt={`Poster`}
            onClick={() =>
              handleImageClick(`${imgURL}${imgSizeGreat}${list.poster_path}`)
            } // Öffne Modal
            style={{ cursor: "pointer" }}
          />
          <p>{list.overview}</p>
          <button onClick={handleButton}>Back to list</button>
        </div>

        {/* Modal wird angezeigt, wenn isModalOpen true ist */}
        {isModalOpen && (
          <Modal imgSrc={modalImgSrc} onClose={handleCloseModal} />
        )}
      </>
    );
  }

  // Wenn kein Film ausgewählt ist, wird die Liste angezeigt
  return (
    <>
      {/* Filmliste */}
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
}

export default MovieList;
