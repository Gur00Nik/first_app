
const personalMovieDB = {
  count: undefined,
  movies: {},
  acrtors: {},
  genres: [],
  privat: false,
};

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

for (; String(numberOfFilms) == "NaN" || numberOfFilms < 0; ) {
  alert("Неккоретный ввод. Повторите");
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
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

  for (; String(ratingFilm) == "NaN" || ratingFilm > 10; ) {
    alert("некоректное ввод рейтинга фильма. Повторите");
    ratingFilm = +prompt("Оцените фильм", "0");
  }

  personalMovieDB.movies[`film number ${i}`].rating = ratingFilm;

  isReady = confirm("Хотите добавить еще фильм?");
}

personalMovieDB.count = numberOfFilms;


console.log(personalMovieDB);
