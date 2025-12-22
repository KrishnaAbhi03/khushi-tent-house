// Initialize AOS
AOS.init({
duration: 1000,
once: true,
offset: 100
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
if (window.scrollY > 100) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// Scroll to top button
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
scrollTop.classList.add('active');
} else {
scrollTop.classList.remove('active');
}
});

scrollTop.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Blog toggle function
function toggleBlog(button) {
const blogPost = button.closest('.blog-post');
const fullContent = blogPost.querySelector('.blog-post-full');
const icon = button.querySelector('i');

if (fullContent.classList.contains('active')) {
fullContent.classList.remove('active');
button.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
} else {
fullContent.classList.add('active');
button.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
}
}

// Blog search function
function searchBlogs() {
const searchTerm = document.getElementById('blogSearch').value.toLowerCase();
const blogPosts = document.querySelectorAll('.blog-post');

blogPosts.forEach(post => {
const title = post.querySelector('h2').textContent.toLowerCase();
const content = post.querySelector('.blog-post-excerpt').textContent.toLowerCase();

if (title.includes(searchTerm) || content.includes(searchTerm)) {
post.style.display = 'block';
} else {
post.style.display = 'none';
}
});

if (searchTerm === '') {
blogPosts.forEach(post => post.style.display = 'block');
}
}

// Comment submission function
function submitComment(event) {
event.preventDefault();
alert('Thank you for your comment! We appreciate your feedback.');
event.target.reset();
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
