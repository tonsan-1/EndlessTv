export async function GetMovieGenres() {
    return await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US`);
}
export async function GetMoviesByGenre(id){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`)
}
export async function GetPopularMovies(){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
}
export async function GetTopMoviesOfAllTime(){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US&region=us&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1990-01-01&release_date.lte=2000-01-01&vote_average.gte=8`)
}
export async function GetMoviesByGenreAndCurrentPage(id,currentPage){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${id}`)
}
export async function GetMovieDetailsById(id) {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US`)
}
