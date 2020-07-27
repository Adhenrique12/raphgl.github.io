const projectsLink = document.querySelector('#projects_page');
const projectsPage = document.querySelector('#projects_section');
const toolsLink = document.querySelector('#tools_page');
const toolsPage = document.querySelector('#tools_section');
const aboutLink = document.querySelector('#about_page');
const aboutPage = document.querySelector('#about_section')
const hamburgerIcon = document.querySelector('.hamburger-menu');
const hamburgerMenu = document.querySelector('nav ul');

projectsLink.addEventListener('click', ()=>{
        event.preventDefault();
        projectsPage.scrollIntoView({behavior: 'smooth'});
})

toolsLink.addEventListener('click', ()=>{
        event.preventDefault();
        toolsPage.scrollIntoView({behavior: 'smooth'});
})

aboutLink.addEventListener('click', ()=>{
        event.preventDefault();
        aboutPage.scrollIntoView({behavior: 'smooth'});
})

hamburgerIcon.addEventListener('click', ()=>{
        hamburgerIcon.classList.toggle('toggle-hamburger');
        hamburgerMenu.classList.toggle('navbar');
})
