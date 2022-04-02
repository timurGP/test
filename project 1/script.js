'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
}



function rememberMyFilms() {
    for (let i = 1; i < 2; i++) {
        let lastWatchFilm = prompt('Один из последних просмотренных фильмов', '');
        let gradeFilm = prompt('На сколько оцените его?', '');
    
        if (lastWatchFilm == '' || gradeFilm == '' || lastWatchFilm == null || gradeFilm == null || lastWatchFilm.length > 50 || gradeFilm.length > 50) {
            i--;
        }
        else {
            personalMovieDB.movies[lastWatchFilm] = gradeFilm;
        }
        
    };
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено давольно мало фильмов')
    }
    else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель')
    }
    else if (personalMovieDB.count >= 30) {
        alert('Вы киноман')
    }
    else {
        console.log('Ошибка!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;    
    }
}
writeYourGenres();
