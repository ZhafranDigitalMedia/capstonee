"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoodSelector from "@/components/MoodSelector";
import SearchFilter from "@/components/SearchFilter";
import MovieCard from "@/components/MovidCard";
import { moods } from "@/data/moods";
import { fetchMovies } from "@/lib/omdb";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(moods[2]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(7);

  const handleFetch = async (query?: string) => {
    try {
      setLoading(true);

      const movieData = await fetchMovies(
        query || selectedMood.query,
        rating
      );

      setMovies(movieData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [selectedMood]);

  const filteredMovies = movies.filter(
    (movie) => Number(movie.imdbRating) >= rating
  );

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-[#0b1026] to-[#6a11cb] text-white">
      <Navbar />

      <Hero />

      <MoodSelector
        moods={moods}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
        onSearch={() => handleFetch(search)}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h3 className="text-3xl font-bold">
            Rekomendasi untuk Mood:
            <span className="text-pink-400 ml-2">
              {selectedMood.nama}
            </span>
          </h3>

          <p className="text-gray-300">
            {filteredMovies.length} film ditemukan
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-2xl font-bold">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}