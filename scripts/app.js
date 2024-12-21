// Выбираем элементы
const header = document.querySelector(".header");
const list = header.querySelector(".header__list");
const burger = header.querySelector(".header__burger");
const body = document.body;

// Функция для добавления/удаления класса "active"
function toggleActiveClass() {
  [list, burger, body].forEach((el) => el.classList.toggle("active"));
}

// Функция для удаления класса "active"
function removeActiveClass() {
  [list, burger, body].forEach((el) => el.classList.remove("active"));
}

// Делегирование событий на общий контейнер
header.addEventListener("click", (e) => {
  if (e.target.closest(".header__burger")) {
    toggleActiveClass();
  } else if (
    e.target.closest(".header__logo") ||
    e.target.closest(".header__link")
  ) {
    removeActiveClass();
  }
});

// Возможность закрытия меню по нажатию клавиши Escape для лучшего UX
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    removeActiveClass(e, "active");
  }
});
