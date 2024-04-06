const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

String(numberOfFilms) !== "NaN"
  ? alert(`Пользователь посмотрел: ${numberOfFilms} фильмов`)
  : alert(`Пользователь ввел не число`);
