import { Background } from "./Background";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { Footer } from "./Footer";
import MovieDetail from "./MovieDetail";
import { useState } from "react";
import movieData from "./dummy-data/movies.json";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const selectedMovie = movieData.find((movie) => movie.id === selectedMovieId);
  console.log(selectedMovie);

  return (
    <div className="bg-background flex flex-col">
      <Background />
      <Navigation />
      <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
        <Home onCardSelect={setSelectedMovieId} />
        <MovieDetail movie={selectedMovie} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
