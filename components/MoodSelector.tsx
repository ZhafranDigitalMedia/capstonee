interface MoodSelectorProps {
  moods: any[];
  selectedMood: any;
  setSelectedMood: (mood: any) => void;
}

export default function MoodSelector({
  moods,
  selectedMood,
  setSelectedMood,
}: MoodSelectorProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">
      <h3 className="text-3xl font-semibold mb-8">
        Bagaimana perasaan Anda hari ini?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {moods.map((mood, index) => {
          const Icon = mood.icon;

          return (
            <div
              key={index}
              onClick={() => setSelectedMood(mood)}
              className={`
                cursor-pointer
                h-[180px]
                rounded-3xl
                border
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:scale-105
                ${
                  selectedMood.nama === mood.nama
                    ? "border-pink-400 bg-white/10 shadow-2xl"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${mood.color}`}
              >
                <Icon size={30} />
              </div>

              <h4 className="text-xl mt-4 font-bold">
                {mood.nama}
              </h4>

              <p className="text-sm text-gray-300 mt-1 px-3">
                {mood.genres}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}