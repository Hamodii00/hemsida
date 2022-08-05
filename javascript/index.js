const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});


let author = document.getElementById('author');
let headline = document.getElementById('subject');
let blogText = document.getElementById('blog-text');
const subButton = document.getElementById('submit-btn');
const blogs = JSON.parse(sessionStorage.getItem('array')) || [];
let x = 0;

addelement = () => {
    blogs.push([author.value, headline.value, blogText.value]); 
    author.value = '';
    headline.value = '';
    blogText.value = ''; 
    let e = '';
    for(let i=0; i<blogs.length; i++){
    e += 'Blog ' + i + ' <br/> ' + 'Author: ' + blogs[i][0] + "<br/>" + 'Headline: ' + blogs[i][1] + "<br/>" + 'Text: ' + blogs[i][2] + "<hr/>";
    };
    sessionStorage.setItem('array', JSON.stringify(blogs));
    sessionStorage.setItem('blogsArray', JSON.stringify(e));
     };


subButton.addEventListener('click', () => {
addelement();

});



