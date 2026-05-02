import { Search } from "lucide-react";

interface SearchFilterProps {
    search: string;
    setSearch: (value: string) => void;
    rating: number;
    setRating: (value: number) => void;
    onSearch: () => void;
}

export default function SearchFilter({
    search,
    setSearch,
    rating,
    setRating,
    onSearch,
}: SearchFilterProps) {
    return (
        <section className="px-10 mt-10">
            <div className="bg-white/10 rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <label className="block mb-3 text-xl font-semibold">
                            Cari Film
                        </label>

                        <div className="flex items-center bg-purple-900/40 rounded-2xl px-4">
                            <Search />
                            <input
                                type="text"
                                placeholder="Masukkan judul film..."
                                className="w-full bg-transparent p-4 outline-none"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={onSearch}
                            className="mt-4 bg-pink-500 px-6 py-3 rounded-xl"
                        >
                            Cari
                        </button>
                    </div>

                    <div>
                        <label className="block mb-3 text-xl font-semibold">
                            Rating Minimum: {rating}.0
                        </label>

                        <input
                            type="range"
                            min="5"
                            max="9"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}