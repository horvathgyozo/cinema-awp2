import { MovieCard } from "./MovieCard";
import movieData from "./dummy-data/movies.json";

export function Home() {
  return (
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Now Showing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movieData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
