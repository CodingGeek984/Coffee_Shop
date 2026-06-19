let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar'); 
let sections = document.getElementsByTagName('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    Array.from(sections).forEach(sec => { HTMLCollection 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let link = document.querySelector('header nav a[href*="' + id + '"]');
            if (link) {
                link.classList.add('active');
            }
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





