import Movie from '../classes/Movie.js';

class MovieListItem {

    constructor(movie, index) {
        this.movie = movie;
        this.index = index;
    }

    render() {
        let element = document.createElement('div');
        element.classList.add('movie');
        element.dataset.id = this.index;
        element.innerHTML = `<div class="movie-info">
            <h3>${this.movie.title}</h3>
            <p>${this.movie.genres.join(", ")}</p>
        </div>`;
        return element;
    }
}

export default MovieListItem;