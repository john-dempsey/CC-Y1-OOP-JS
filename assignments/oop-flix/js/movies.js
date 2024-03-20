import Movie from './classes/Movie.js';
import MovieListItem from './components/MovieListItem.js';

let movies = Movie.findAll();

let main = document.querySelector('#main');

let moviesHTML = movies.map((movie, index) => {
    let movieListItemView = new MovieListItem(movie, index);
    return movieListItemView.render();
});

moviesHTML.forEach(movie => main.appendChild(movie));

main.addEventListener('click', (event) => {
    let movieDiv = event.target.closest('.movie');
    
    if (movieDiv) {
        let movie = movies[movieDiv.dataset.id];
        console.log(movie.title);
    }
});
