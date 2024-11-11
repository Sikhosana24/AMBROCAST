const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");

// Toggles the "show-links" class on navLinks container when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

// Hides the nav links when clicked
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default link behavior
    const href = link.getAttribute("href"); // Get the href attribute value
    const targetElement = document.querySelector(href); // Find the corresponding section

    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("show-links"); // Hide the nav links
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Scroll to Top" button element
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // Get the root element 
  const rootElement = document.documentElement;

  // Function to handle scroll events
  function handleScroll() {
    // Show the "Scroll to Top" button when the user scrolls down 100 pixels
    if (rootElement.scrollTop > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  // Function to scroll to the top of the page smoothly(https://stackoverflow.com/questions/15935318/smooth-scroll-to-top)
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling animation
    });
  }

  // Add click event listener to the "Scroll to Top" button
  scrollToTopBtn.addEventListener("click", scrollToTop);

  // Add scroll event listener to the document
  document.addEventListener("scroll", handleScroll);
});