import { Star } from "lucide-react";

export default function MovieCard({ movie }: any) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
      <div className="overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-yellow-400 mb-3">
          <Star size={16} fill="yellow" />

          <span>{movie.imdbRating}</span>

          <span className="text-gray-400">•</span>

          <span className="text-gray-300">
            {movie.Year}
          </span>
        </div>

        <h4 className="text-xl font-semibold text-white mb-3 line-clamp-1">
          {movie.Title}
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          {movie.Genre?.split(",").map((genre: string) => (
            <span
              key={genre}
              className="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/20"
            >
              {genre.trim()}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {movie.Plot}
        </p>
      </div>
    </div>
  );
}