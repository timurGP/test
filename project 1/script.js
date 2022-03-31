const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
}

const lastWatchFilm = prompt('Один из последних просмотренных фильмов', '');
const gradeFilm = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchFilm] = gradeFilm;

console.log(personalMovieDB);