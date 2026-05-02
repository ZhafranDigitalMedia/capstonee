export default function Hero() {
    return (
        <section className="text-6xl funt-bold">
            <h2 className="text-6xl font-bold text-center">
                Temukan Film Sesuai{" "}
                <span className="text-pink-400">Mood Anda</span>
            </h2>
            <p className="mt-4 text-xl text-purple-200 max-w-3xl mx-auto text-center">
                Sistem rekomendasi berbasis mood menggunakan content-based filtering
                untuk memberikan pengalaman menonton yang personal
            </p>

        </section>
    )
}