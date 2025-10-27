let menuIcon = document.querySelector('#icon'); 
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

let skillsSection = document.querySelector('#Education'); 
let skillsContent = document.querySelector('.skills-content');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header'); 
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    if (skillsSection && top >= skillsSection.offsetTop - 500) {

        if (!skillsContent.classList.contains('animate')) {
            skillsContent.classList.add('animate');

            document.querySelectorAll('.skills-content .progress .bar span').forEach(span => {
                let originalWidth = span.parentElement.querySelector('h3 span').innerText; 
                span.style.setProperty('--skill-width', originalWidth); 
            });
        }
    }
};