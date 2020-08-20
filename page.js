const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");
const map3 = document.querySelector("#map3");
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('openie');
    links.forEach(links => {
        links.classList.toggle("fade");
    });
});


map1.addEventListener('click', () => {
    map1.classList.toggle("opener");
});
map2.addEventListener('click', () => {
    map2.classList.toggle("opener");
});
map3.addEventListener('click', () => {
    map3.classList.toggle("opener");
});
