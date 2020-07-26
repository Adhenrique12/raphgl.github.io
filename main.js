const projectsLink = document.querySelector('#projects_page');
const projectsPage = document.querySelector('#projects_section');
const toolsLink = document.querySelector('#tools_page');
const toolsPage = document.querySelector('#tools_section');
const aboutLink = document.querySelector('#about_page');
const aboutPage = document.querySelector('#about_section')

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
