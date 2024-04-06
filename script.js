const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const firstEducation = {
  nameFilms: prompt("Один из последних просмотренных фильмов", ""),
  rating: +prompt("На сколько оцените его", ""),
};
const secondEducation = {
  nameFilms: prompt("Один из последних просмотренных фильмов", ""),
  rating: +prompt("На сколько оцените его", ""),
};

String(numberOfFilms) !== "NaN"
  ? alert(`Пользователь посмотрел: ${numberOfFilms} фильмов`)
  : alert(`Пользователь ввел не число`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    firstEducation,
    secondEducation,
  },
  acrtors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);
