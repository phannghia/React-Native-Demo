 //const urlGetMovies = 'http://localhost:3000/movies';
const urlGetMovies = 'http://localhost:3000/movies';
const urlPostMovies = 'http://localhost:3000/movies';
function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response): [] 
    console.log(movies)      
    return movies;
}


function* postMoviesFromApi(newMovie) {
    const response = yield fetch(urlGetMovies, {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:newMovie.name,
            releaseYear:newMovie.releaseYear,
        }),
    });
    const movies = yield response.status === 200 ? JSON.parse(response): [] 
    console.log(movies)      
    return movies;
}
export const Api = {
    getMoviesFromApi,
    postMoviesFromApi
}; 