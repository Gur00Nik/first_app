const personalMovieDB = {
  count: undefined,
  movies: {},
  acrtors: {},
  genres: [],
  private: false,
  showMyDB: function () {
    return this.private
      ? console.log(this)
      : console.log("Пользователь скрыл информацию о своей базе");
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let answerQuestionForGenres = prompt(`Ваш любимый жанр под номером ${i}`);
      while (
        !answerQuestionForGenres.trim() ||
        typeof answerQuestionForGenres == "number"
      ) {
        alert(`Неверный ввод, повторите попытку`);
        answerQuestionForGenres = prompt(`Ваш любимый жанр под номером ${i}`);
      }
      this.genres.push(answerQuestionForGenres);
    }
    this.genres.forEach((item, index) => {
      console.log(`Любимый жанр по номером ${index + 1} - это ${item} `);
    });
  },
  toogleVisibleMyDB: function () {
    this.private = !this.private;
  },
};

const { movies } = personalMovieDB;

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

while (Number.isNaN(Number(numberOfFilms)) || numberOfFilms < 0) {
  alert("Неккоретный ввод. Повторите");
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
}

numberOfFilms <= 10
  ? alert("Смотрите мало фильмов")
  : numberOfFilms <= 30
  ? alert("Вы средний любитель фильмов")
  : alert("Вы заядлый киноман");

personalMovieDB.count = numberOfFilms;

let isReady = confirm("Вы готовы пройти опрос");

inputInfo: for (let i = 1; isReady == true; i++) {
  movies[`film number ${i}`] = {};

  let nameFilm = prompt("Название фильма", "");

  if (nameFilm && nameFilm.length < 50) {
    movies[`film number ${i}`].name = nameFilm;
  } else {
    --i;
    alert("некоректное название фильма");
    continue inputInfo;
  }

  let ratingFilm = +prompt("Оцените фильм", "0");

  while (
    Number.isNaN(Number(ratingFilm)) ||
    ratingFilm > 10 ||
    ratingFilm < 0
  ) {
    alert("некоректное ввод рейтинга фильма. Повторите");
    ratingFilm = +prompt("Оцените фильм", "0");
  }
  movies[`film number ${i}`].rating = ratingFilm;
  isReady = confirm("Хотите добавить еще фильм?");
}
personalMovieDB.toogleVisibleMyDB();

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
