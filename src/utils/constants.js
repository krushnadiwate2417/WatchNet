export const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const popularURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const upComingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTFlMzc5OTAzNmI2ODc2NWM0N2UxZWVlZjljNDU3NyIsIm5iZiI6MTc0MDQ2MzY0OS43MzIsInN1YiI6IjY3YmQ1ZTIxNjM0MDA5MTdlODJkYWM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvcg-msFwAWs_dX0iED4qkWdF63QnPNIDzUACtyS3p8'
  }
};

export const imgURL = "https://image.tmdb.org/t/p/w500"