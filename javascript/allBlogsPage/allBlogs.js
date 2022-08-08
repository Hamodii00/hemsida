import { toggleHamburger } from "../utilities/toggleHamburger.js";
toggleHamburger();
let i = 0;
const divsBlog = document.getElementById("divs-blog");
// Hämtar vår lista av blogs från sessionStorage
let blogs = JSON.parse(sessionStorage.getItem("blogs"));
// Om det inte fanns någon lista sparad, skicka in en h1 tagg istället
if (!blogs) {
  // Skapa en H1 tagg, ge den en text, och lägg in h1 taggen i divsBlog
  const title = document.createElement("h1");
  title.innerText = "No saved blogposts";
  divsBlog.append(title);
} else {

  // Om vi har en lista av blogs, gå igenom den lista och skapa HTML element av dem
  for ( i = 0; i<blogs.length; i++) {
    // Skapa en div som innehåller headline(h3), author(h6), blogText(p).
    // Värdena på dessa HTML-taggar ska komma från objektet som vi går igenom i loopen.
    // Lägg till den nya diven i divsBlog.
    const container = document.createElement("div"); container.setAttribute('id', blogs[i]);
    const headline = document.createElement("h3");
    const author = document.createElement("h6");
    const blogText = document.createElement("p");
    const deleteBtn = document.createElement("button"); deleteBtn.setAttribute('id', blogs[i]);
    const editBtn = document.createElement("button"); editBtn.setAttribute('id', blogs[i]); 

    blogText.innerText = blogs[i].blogText;
    author.innerText = blogs[i].author;
    headline.innerText = blogs[i].headline;
    deleteBtn.innerText="Delete";
    editBtn.innerText="Edit";
    container.append(headline, author, blogText, deleteBtn, editBtn);
    divsBlog.append(container);
    
    deleteBtn.addEventListener('click', () => {
      if(deleteBtn.id === container.id ){
       container.remove();
       blogs.splice(blogs - blogs[i]);    
       sessionStorage.setItem("blogs", JSON.stringify(blogs));
       blogs = JSON.parse(sessionStorage.getItem("blogs"));
      }
      });
      
  }
  
}
console.log(blogs);