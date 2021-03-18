export async function GetMovieGenres() {
    return await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US`);
}
export async function GetMoviesByGenre(id){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b4d9b37d4cd505e6f9cc47ac4aa2f0e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
}