import { toggleHamburger } from "../utilities/toggleHamburger.js";
toggleHamburger();
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
  for (let i = 0; i < blogs.length; i++) {
    // Skapa en div som innehåller headline(h3), author(h6), blogText(p).
    // Värdena på dessa HTML-taggar ska komma från objektet som vi går igenom i loopen.
    // Lägg till den nya diven i divsBlog.
    const container = document.createElement("div" );
    container.setAttribute("id", blogs[i]);
    
    const headline = document.createElement("h3");
    const author = document.createElement("h6");
    const blogText = document.createElement("p");
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn")
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editBtn")

    blogText.innerText = blogs[i].blogText;
    author.innerText = blogs[i].author;
    headline.innerText = blogs[i].headline;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";
    container.append(headline, author, blogText, deleteBtn, editBtn);
    divsBlog.append(container);

    deleteBtn.addEventListener("click", () => {
      
      container.remove();
      blogs.splice(i, 1);
      sessionStorage.setItem("blogs", JSON.stringify(blogs));
    });
    editBtn.addEventListener("click", () => {    
    author.contentEditable = "true";
    headline.contentEditable = "true";
    blogText.contentEditable = "true";
    deleteBtn.style.display ="none";
    editBtn.style.display = "none";
    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.setAttribute("class", "saveBtn")
    container.append(saveBtn);
    
    saveBtn.addEventListener("click", () => {
    author.contentEditable = "false";
    headline.contentEditable = "false";
    blogText.contentEditable = "false";
    //testade att spara värdena på nytt här under
    author = author.innerText;
    headline = headline.innerText;
    blogText = blogText.innerText;
    
    deleteBtn.style.display ="block";
    editBtn.style.display = "block";
    saveBtn.style.display = "none"
    sessionStorage.setItem("blogs", JSON.stringify(blogs));
    })
    
    });
    
  }
}
