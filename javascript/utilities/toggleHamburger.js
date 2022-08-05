export const toggleHamburger = () => {
  const navbar = document.querySelector(".navbar");

  const menuIcon = document.querySelector(".hamburger-menu");
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });
};
