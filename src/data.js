// Use environment variable for API key
export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const valueConverter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    }
    else return value;
}