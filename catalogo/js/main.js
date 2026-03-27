import { categories } from "./data.js";
import { createCarousel } from "./components/Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const nomePerfil = localStorage.getItem("perfilAtivoNome");
  const imagemPerfil = localStorage.getItem("perfilAtivoImagem");

  if (nomePerfil && imagemPerfil) {
    const kidsLink = document.querySelector(".kids-link");
    const profileIcon = document.querySelector(".profile-icon");

    if (kidsLink) kidsLink.textContent = nomePerfil;

    if (profileIcon) {
      // trato caminhos relativos para funcionar em catalogo/ e na raiz
      let imgPath = imagemPerfil;
      if (!imgPath.startsWith("http") && !imgPath.startsWith("/")) {
        // Se o valor for 'assets/...', ajusta para catalogo/ => '../assets/...'
        if (imgPath.startsWith("assets/")) {
          imgPath = "../" + imgPath;
        }
      }
      profileIcon.src = imgPath;
    }
  }

  const container = document.getElementById("main-content");

  if (container) {
    categories.forEach((category) => {
      const carousel = createCarousel(category);
      container.appendChild(carousel);
    });
  }
});
