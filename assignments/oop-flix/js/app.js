import Movie from './classes/Movie.js';
import Show from './classes/Show.js';

let movies = Movie.findAll();

movies.forEach(movie => {
    console.log(movie.getDetails());
});

let shows = Show.findAll();

shows.forEach(show => {
    console.log(show.getDetails());
});