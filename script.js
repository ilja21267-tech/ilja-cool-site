function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function changeText() {
  const title = document.getElementById("title");
  title.textContent = "Кнопки реально работают 🚀";
}

function showProject(num) {
  alert("Ты открыл проект №" + num);
}

function sayHi() {
  alert("Спасибо! Сообщение отправлено 👍 (почти 😄)");
}
