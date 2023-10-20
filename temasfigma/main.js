// script.js
const themeToggle = document.getElementById("theme-toggle-button");
const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

// Verifique o tema preferido do usuário no carregamento da página
const userPreferredTheme = localStorage.getItem("theme");
if (userPreferredTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
}
