import { toggleHamburger } from "../utilities/toggleHamburger.js";
toggleHamburger();

const author = document.getElementById("author");
const headline = document.getElementById("subject");
const blogText = document.getElementById("blog-text");
const subButton = document.getElementById("submit-btn");
const blogs = JSON.parse(sessionStorage.getItem("blogs")) || [];

const addelement = () => {
  // Skapar ett objekt med värden author, headling, blogText och id.
  // Id måste vara unikt, så det blir namnet på author + längden på arrayen.
  const blogPost = {
    author: author.value,
    headline: headline.value,
    blogText: blogText.value,
    id: author.value + blogs.length,
  };
  // Lägger till det nyskapade objeket i vår lista av objekt
  blogs.push(blogPost);
  author.value = "";
  headline.value = "";
  blogText.value = "";

  // Sparar vår list i localstorage
  sessionStorage.setItem("blogs", JSON.stringify(blogs));
};

subButton.addEventListener("click", () => {
  addelement();
});
