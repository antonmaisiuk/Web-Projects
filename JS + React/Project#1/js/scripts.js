'use strict';

let numbersOfFilms;
let lastFilm = "";
let ratingLastFilm;
// let genresArray = [];

function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы посмотрели?");

    while(numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)){
        numbersOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    }

}

start();

const personalMovieDB = {
    count : numbersOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    do{
    lastFilm = prompt("Один из последних ваших фильмов?");

    }while(lastFilm == "" || lastFilm == null || lastFilm.length > 50);

    do{
        ratingLastFilm = prompt("На сколько его оцените?");

    }while(ratingLastFilm == "" || ratingLastFilm == null || ratingLastFilm.length > 50);
    personalMovieDB.movies[lastFilm] = ratingLastFilm;
}
rememberMyFilms();


function detectPersonalLevel() {
    switch (true) {
    case (personalMovieDB.count < 10) : alert("Просмотрено мало фильмов");        
        break;
    case (personalMovieDB.count >= 10 && personalMovieDB.count < 30) : alert("Классический зритель");
        break;
    case (personalMovieDB.count >= 30) : alert("Вы киноман!");
        break;
    default : alert("Ошибочка!");
      break;
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }    
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + (i+1));    
    }

}
writeYourGenres();
// console.log(personalMovieDB);
