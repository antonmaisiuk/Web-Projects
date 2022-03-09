

let numbersOfFilms;
let lastFilm = "";
let ratingLastFilm;


do{
    numbersOfFilms = +prompt("Сколько фильмов вы посмотрели?");

}while(numbersOfFilms == "" || numbersOfFilms == null){}

do{
    lastFilm = prompt("Один из последних ваших фильмов?");

}while(lastFilm == "" || lastFilm == null || lastFilm.length > 50){}

do{
    ratingLastFilm = prompt("На сколько его оцените?");

}while(ratingLastFilm == "" || ratingLastFilm == null || ratingLastFilm.length > 50){}

let personalMovieDB = {
    count : numbersOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


personalMovieDB.movies[lastFilm] = ratingLastFilm;

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


console.log(personalMovieDB);
