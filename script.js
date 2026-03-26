// Theme toggle functionality
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.themeIcon = document.querySelector(".theme-icon");
    this.body = document.body;

    this.init();
  }

  init() {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }

    // Add event listener
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  }

  toggleTheme() {
    if (this.body.classList.contains("light-mode")) {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  }

  setLightMode() {
    this.body.classList.add("light-mode");
    this.themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }

  setDarkMode() {
    this.body.classList.remove("light-mode");
    this.themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
});
