

let numbersOfFilms = +prompt("Сколько фильмов вы посмотрели?");
let lastFilm = prompt("Один из последних ваших фильмов?");
let ratingLastFilm = prompt("На сколько его оцените?");

let personalMovieDB = {
    count : numbersOfFilms,
    movies : {
        lastFilm : ratingLastFilm
    },
    actors : {},
    genres : [],
    privat : false
};
console.log(personalMovieDB);
