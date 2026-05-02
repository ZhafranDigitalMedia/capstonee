import { Smile, Frown, Angry, Zap, Clock } from "lucide-react";

export const moods = [
    {
        nama: "Bahagia",
        icon: Smile,
        query: "Comedy",
        genres: "Comedy, Romance",
        color: "bg-yellow-500"
        
    },
    {
        nama: "Sedih",
        icon: Frown,
        query: "drama",
        genres: "Drama, comedy",
        color: "bg-blue-500"
        
    },
    
    {
        nama: "Marah",
        icon: Angry,
        query: "action",
        genres: "Thriller, action",
        color: "bg-red-500"
        
    },
    {
        nama: "Stress",
        icon: Zap,
        query: "family",
        genres: "Comedy, family",
        color: "bg-purple-500"
        
    },
    {
        nama: "Bosan",
        icon: Clock,
        query: "adventure",
        genres: "adventure, action",
        color: "bg-green-500"
        
    }
]