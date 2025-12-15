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

/* Burger menu */
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

/* Scroll animations */
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight;
  sections.forEach(sec => {
    if(scrollPos > sec.offsetTop + 50){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // чтобы форма не перезагружала страницу

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message){
    alert(`Спасибо, ${name}!\nВаше сообщение получено:\n${message}`);
    form.reset(); // очищаем поля
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
});

