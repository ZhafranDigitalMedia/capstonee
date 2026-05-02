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
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(7);

  const handleFetch = async (query?: string) => {
    const movieData = await fetchMovies(
      query || selectedMood.query,
      rating
    );
    setMovies(movieData);
  };

  useEffect(() => {
    handleFetch();
  }, [selectedMood, rating]);

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

      <section className="px-10 py-12">
        <div className="flex justify-between mb-8">
          <h3 className="text-3xl font-bold">
            Rekomendasi untuk Mood: {selectedMood.nama}
          </h3>

          <p>{movies.length} film ditemukan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}