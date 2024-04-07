let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: undefined,
  movies: {},
  acrtors: {},
  genres: [],
  privat: false,
};

while (String(numberOfFilms) == "NaN" || numberOfFilms < 0) {
  alert("ошибка при вводе количества просмотренных фильмов");
  numberOfFilms = +prompt("Введите количество просмотренных фильмов");
}

numberOfFilms <= 10
  ? alert("Смотрите мало фильмов")
  : numberOfFilms <= 30
  ? alert("Вы средний любитель фильмов")
  : alert("Вы заядлый киноман");

let isReady = confirm("Вы готовы пройти опрос");

inputInfo: for (let i = 1; isReady == true; i++) {
  personalMovieDB.movies[`film number ${i}`] = {};

  let nameFilm = prompt("Название фильма", "");

  if (nameFilm && nameFilm.length < 50) {
    personalMovieDB.movies[`film number ${i}`].name = nameFilm;
  } else {
    --i;
    alert("некоректное название фильма");
    continue inputInfo;
  }

  let ratingFilm = +prompt("Оцените фильм", "0");

  while (String(ratingFilm) == "NaN" || ratingFilm > 10 || ratingFilm < 0) {
    alert("Обозначьте рейтинг фильма от 0 до 10");
    ratingFilm = +prompt("оцените фильм", "0");
  }

  personalMovieDB.movies[`film number ${i}`].rating = ratingFilm;

  isReady = confirm("Хотите добавить еще фильм?");
}
// const firstEducation = {
//   nameFilms: prompt("Один из последних просмотренных фильмов", ""),
//   rating: +prompt("На сколько оцените его", ""),
// };
// const secondEducation = {
//   nameFilms: prompt("Один из последних просмотренных фильмов", ""),
//   rating: +prompt("На сколько оцените его", ""),
// };

// String(numberOfFilms) !== "NaN"
//   ? numberOfFilms
//   : (numberOfFilms = "пользователь ввел не число");

console.log(personalMovieDB);
