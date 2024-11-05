// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // Ensures animations only happen once on scroll
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animated Skills Appearance
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skills span');
    skills.forEach((skill, index) => {
        if (skill.getBoundingClientRect().top < window.innerHeight) {
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            }, index * 100); // Delay each skill's animation slightly
        }
    });
});
