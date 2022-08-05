import { toggleHamburger } from "../utilities/toggleHamburger.js";
toggleHamburger();

const divsBlog = document.getElementById("divs-blog");

// Hämtar vår lista av blogs från sessionStorage
const blogs = JSON.parse(sessionStorage.getItem("blogs"));

// Om det inte fanns någon lista sparad, skicka in en h1 tagg istället
if (!blogs) {
  // Skapa en H1 tagg, ge den en text, och lägg in h1 taggen i divsBlog
  const title = document.createElement("h1");
  title.innerText = "No saved blogposts";
  divsBlog.append(title);
} else {
  // Om vi har en lista av blogs, gå igenom den lista och skapa HTML element av dem

  for (const blog of blogs) {
    // Skapa en div som innehåller headline(h3), author(h6), blogText(p).
    // Värdena på dessa HTML-taggar ska komma från objektet som vi går igenom i loopen.
    // Lägg till den nya diven i divsBlog.
    const container = document.createElement("div");
    const headline = document.createElement("h3");
    const author = document.createElement("h6");
    const blogText = document.createElement("p");

    blogText.innerText = blog.blogText;
    author.innerText = blog.author;
    headline.innerText = blog.headline;
    container.append(headline, author, blogText);
    divsBlog.append(container);
  }
}
