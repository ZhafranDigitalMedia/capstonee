export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        <div>
          <h1 className="text-3xl font-bold text-white">
            MoodFlix
          </h1>

          <p className="text-sm text-purple-200">
            Sistem Rekomendasi Film
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-xl text-white font-medium hover:opacity-90 transition">
            Rekomendasi
          </button>

          <button className="text-purple-200 hover:text-white transition">
            Analisis
          </button>
        </div>
      </div>
    </nav>
  );
}