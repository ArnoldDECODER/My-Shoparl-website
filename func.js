// Function to toggle the visibility of the menu and the hamburger icon
// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }

function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Selects the menu element
  const icon = document.querySelector(".hamburger-icon"); // Selects the hamburger icon element

  // Checks if the menu is already open
  if (menu.classList.contains("open")) {
      menu.classList.add("slide-out"); // Adds a slide-out class to trigger a sliding out animation
      setTimeout(() => {
          menu.classList.remove("open", "slide-out"); // Removes the open and slide-out classes after the animation duration
      }, 300); // Duration should match the CSS animation
  } else {
      menu.classList.add("open"); // Adds the 'open' class to display the menu
  }

  icon.classList.toggle("open"); // Toggles the 'open' class on the hamburger icon
}

// Scroll event to show or hide the "Scroll to Top" button based on the scroll position
window.onscroll = function () {
  const button = document.getElementById('scrollToTop'); // Selects the "Scroll to Top" button
  if (window.scrollY > 300) { // If the user scrolls down more than 300px
    button.style.display = 'block'; // Show the button
  } else {
    button.style.display = 'none'; // Hide the button
  }
};

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top with a smooth transition
}

// Function to start a countdown timer with a specified duration (in seconds)
function startCountdown(duration) {
  let remainingTime = duration; // Initializes the remaining time with the given duration

  const timerElement = document.getElementById("countdownTimer"); // Selects the element to display the countdown
  const interval = setInterval(() => {
      const hours = Math.floor(remainingTime / 3600); // Calculates the hours remaining
      const minutes = Math.floor((remainingTime % 3600) / 60); // Calculates the minutes remaining
      const seconds = remainingTime % 60; // Calculates the seconds remaining

      // Updates the countdown display with hours, minutes, and seconds
      timerElement.textContent = `Sale ends in: ${hours}h ${minutes}m ${seconds}s`;

      if (remainingTime <= 0) { // If the remaining time is 0 or less
          clearInterval(interval); // Stops the countdown interval
          timerElement.textContent = "Sale ended!"; // Displays the message that the sale has ended
      }

      remainingTime--; // Decreases the remaining time by 1 second
  }, 1000); // Executes the countdown every second
}

// Example countdown for 1 hour = 3600 seconds
startCountdown(604000); // Starts the countdown with a duration of 604,000 seconds (approximately 1 hour)

const carouselItems = document.querySelectorAll('.carousel-item'); // Selects all carousel items
const nextSlideButton = document.querySelector('.nextSlide'); // Selects the button to move to the next slide

let currentIndex = 0; // Initializes the index of the current carousel item

// Adds an event listener to the "Next Slide" button
nextSlideButton.addEventListener('click', () => {
  // Hide the current slide by adding the 'hidden' class
  carouselItems[currentIndex].classList.add('hidden');
  
  // Update the index and wrap around if necessary (circular navigation)
  currentIndex = (currentIndex + 1) % carouselItems.length;
  
  // Show the new slide by removing the 'hidden' class
  carouselItems[currentIndex].classList.remove('hidden');
});
