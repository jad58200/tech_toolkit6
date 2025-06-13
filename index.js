const starsContainer = document.querySelector('.stars');
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll('.nav a');

for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  const size = `${Math.random() * 2 + 1}px`;
  star.style.width = size;
  star.style.height = size;
  starsContainer.appendChild(star);
}

document.querySelector('.main-section').style.display = 'none';
document.querySelector(".landing-screen").style.display = 'none';
document.getElementById('my-btn').addEventListener('click', () => {
document.querySelector('.intro').style.display = 'none';
document.querySelector(".landing-screen").style.display = 'block'
setTimeout(() => {
document.querySelector(".landing-screen").style.display = 'none';
document.querySelector('.main-section').style.display = 'block';
},2000);
});

const stickyHeader = document.getElementById("stickyHeader");

const logo = document.querySelector(".first-line img");
const navList = document.querySelector(".first-line ol");

const logoClone = logo.cloneNode(true);
const navClone = navList.cloneNode(true);

logoClone.classList.add("sticky-icon");
navClone.classList.add("sticky-nav");

stickyHeader.appendChild(logoClone);
stickyHeader.appendChild(navClone);

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth > 768) {
    if (currentScroll < lastScrollTop && currentScroll > 100) {
      stickyHeader.style.top = "0";
    } else {
      stickyHeader.style.top = "-100px";
    }
  } else {
    stickyHeader.style.top = "-100px"; 
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



menuBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  document.body.style.overflow = "hidden"; 
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  document.body.style.overflow = "hidden";
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.style.display = 'block';  
    closeBtn.style.display = 'none';
  });
});

window.addEventListener("DOMContentLoaded", () => {
  closeBtn.style.display = "none";
});
