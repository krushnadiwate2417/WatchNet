export const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const popularURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const upComingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`
  }
};

export const imgURL = "https://image.tmdb.org/t/p/w500";

export const languagesUsing = [
  {languageName : "en",name : "English"},
  {languageName : "hindi",name : "Hindi"},
  {languageName : "spanish",name : "Spanish"},
];


export const tvTopRatedURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200';
export const tvPopularURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc';
export const tvAirURL = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';


