'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: true,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
    },
    rememberMyFilms: function() {
        for (let i = 1; i < 2; i++) {
            let lastWatchFilm = prompt('Один из последних просмотренных фильмов', '');
            let gradeFilm = prompt('На сколько оцените его?', '');
        
            if (lastWatchFilm == '' || gradeFilm == '' || lastWatchFilm == null || gradeFilm == null || lastWatchFilm.length > 50 || gradeFilm.length > 50) {
                i--;
            }
            else {
                personalMovieDB.movies[lastWatchFilm] = gradeFilm;
            }
            
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено давольно мало фильмов');
        }
        else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        }
        else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        }
        else {
            console.log('Ошибка!');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre == '') {
                i--;
            }
            else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }
        else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
