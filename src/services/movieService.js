const apiKey = `b4d9b37d4cd505e6f9cc47ac4aa2f0e1`;
const url = `https://api.themoviedb.org/3/`;

export const movieService = {
    async getAllMovieGenres() {
        return await fetch(`${url}genre/movie/list?api_key=${apiKey}&language=en-US`)
            .then(res => res.json());
    },
    async getMoviesByGenre(id) {
        return await fetch(`${url}discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`)
            .then(res => res.json());
    },
    async getPopularMovies() {
        return await fetch(`${url}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res => res.json());
    },
    async getTopClassicsMoviesOfAllTime() {
        return await fetch(`${url}discover/movie?api_key=${apiKey}&language=en-US&region=us&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1990-01-01&release_date.lte=2000-01-01&vote_average.gte=8`)
            .then(res => res.json());
    },
    async getMoviesByGenreAndCurrentPage(id,currentPage) {
        return await fetch(`${url}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${id}`)
            .then(res => res.json());
    },
    async getMovieDetailsById(id) {
        return await fetch(`${url}movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json());
    }
}

