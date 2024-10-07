// Select the hamburger menu by its ID and the navbar links container by its class
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.querySelector('.navbar-links');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
  // Toggle the 'open' class on the navbar links to show or hide the menu
  navbarLinks.classList.toggle('open');
});

// Select the flip container by its ID
const flipContainer = document.getElementById('flip-container');

flipContainer.addEventListener('click', function () {
  flipContainer.classList.toggle('flipped');
});