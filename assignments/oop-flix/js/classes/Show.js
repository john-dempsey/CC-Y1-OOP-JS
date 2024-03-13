import DB from './DB.js';

class Show {

    static findAll() {
        let db = new DB();
        let objects = db.getShowData();
        let shows = objects.map(obj => new Show(obj));

        return shows;
    }

    constructor(data) {
        this.title = data.title;
        this.poster = data.poster;
        this.genres = data.genres;
        this.homepage = data.homepage;
        this.overview = data.overview;
        this.youtube_id = data.youtube_id;
        this.cast = data.cast;
        this.first_air_date = data.first_air_date;
    }

    getDetails() {
        return `${this.title} (${this.first_air_date})\n` +
            `Genres: ${this.genres.join(", ")}\n` +
            `Homepage: ${this.homepage}\n` +
            `Cast: ${this.cast.map(actor => actor.name).join(", ")}\n` +
            `Overview: ${this.overview}\n` +
            `Trailer: https://www.youtube.com/watch?v=${this.youtube_id}`;
    }
}

export default Show;