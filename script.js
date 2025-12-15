function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function changeText() {
  const title = document.getElementById("title");
  title.textContent = "Кнопки работают и всё premium ✨";
}

function showProject(num) {
  alert("Ты открыл проект №" + num + " 🚀");
}

function sayHi() {
  alert("Привет! Сообщение отправлено 👍");
}
