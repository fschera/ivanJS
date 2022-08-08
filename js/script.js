const numberOfFilms = prompt("Wie viele Filme haben sie schon gesehen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const movie1 = prompt("Welchen Film haben zu zuletzt gesehen", "");
const note1 = prompt("Wie bewerten Sie den letzten Film (von 0 bis 10, dezimal)", ""); 
const movie2 = prompt("Welchen Film zu als zweitletzten gesehen", "");
const note2 = prompt("Wie bewerten Sie den vorletzten Film (von 0 bis 10, dezimal)", ""); 

personalMovieDB.movies[movie1] = note1;
personalMovieDB.movies[movie2] = note2;

console.log(personalMovieDB);
