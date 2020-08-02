// Query for tags
const projectsLink = document.querySelector('#projects_page');
const projectsPage = document.querySelector('#projects_section');
const toolsLink = document.querySelector('#tools_page');
const toolsPage = document.querySelector('#tools_section');
const aboutLink = document.querySelector('#about_page');
const aboutPage = document.querySelector('#about_section')
const hamburgerIcon = document.querySelector('.hamburger-menu');
const hamburgerMenu = document.querySelector('nav ul');

function focusOnSection(pageSection, pageTheme){
        let theme = `focus-${pageTheme}`;
        pageSection.setAttribute('id', theme);
        setTimeout(()=>{
                pageSection.removeAttribute('id');
        }, 400);
}

function scrollToSection(pageLink, pageSection, pageTheme){
        pageLink.addEventListener('click', (event)=>{
                event.preventDefault();
                pageSection.scrollIntoView({behavior: 'smooth'});
                if (window.innerWidth > 767){
                        focusOnSection(pageSection, pageTheme);
                }
                if (window.innerWidth <= 767){
                        toggleHamburgerMenu();
                }
        });
}

function toggleHamburgerMenu(){
        hamburgerIcon.classList.toggle('toggle-hamburger');
        hamburgerMenu.classList.toggle('navbar');
}

scrollToSection(projectsLink, projectsPage, pageTheme='dark');
scrollToSection(toolsLink, toolsPage, pageTheme='light');
scrollToSection(aboutLink, aboutPage, pageTheme='dark');

// Activate Hamburger menu when clicked
hamburgerIcon.addEventListener('click', ()=>{
        toggleHamburgerMenu();
})
