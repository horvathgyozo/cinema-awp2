import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getAll() {
      const response = await fetch("http://127.0.0.1:8000/api/movies");
      const movies = await response.json();
      setMovies(movies);
    }
    getAll();
  }, []);

  return (
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Now Showing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
