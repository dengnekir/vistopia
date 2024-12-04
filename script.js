// Hamburger menü işlevselliği
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Sayfa kaydırma animasyonu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Sayaç animasyonu
const stats = document.querySelectorAll(".stat-item h3");
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const value = parseInt(target.dataset.value);
      let startValue = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        startValue += increment;
        target.innerText = Math.floor(startValue);

        if (startValue >= value) {
          target.innerText = value;
          clearInterval(counter);
        }
      }, 16);

      observer.unobserve(target);
    }
  });
}, observerOptions);

stats.forEach((stat) => observer.observe(stat));

// Navbar scroll efekti
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(26, 26, 26, 0.95)";
  } else {
    navbar.style.background = "rgba(26, 26, 26, 0.9)";
  }
});
