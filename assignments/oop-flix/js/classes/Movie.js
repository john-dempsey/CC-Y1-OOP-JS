import DB from './DB.js';

class Movie {

    static findAll() {
        let db = new DB();
        let objects = db.getMovieData();
        let movies = objects.map(obj => new Movie(obj));

        return movies;
    }

    constructor(data) {
        this.title = data.title;
        this.poster = data.poster;
        this.genres = data.genres;
        this.homepage = data.homepage;
        this.rating = data.rating;
        this.revenue = data.revenue;
        this.overview = data.overview;
        this.imdb_id = data.imdb_id;
        this.cast = data.cast;
    }

    getDetails() {
        return `${this.title} (${this.rating})\n` +
            `Genres: ${this.genres.join(", ")}\n` +
            `Revenue: ${this.revenue}\n` +
            `IMDB: https://www.imdb.com/title/${this.imdb_id}\n` +
            `Homepage: ${this.homepage}\n` +
            `Cast: ${this.cast.map(actor => actor.name).join(", ")}\n` +
            `Overview: ${this.overview}`;
    }
}

export default Movie;