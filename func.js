// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains("open")) {
        menu.classList.add("slide-out");
        setTimeout(() => {
            menu.classList.remove("open", "slide-out");
        }, 300); // Duration should match the CSS animation
    } else {
        menu.classList.add("open");
    }

    icon.classList.toggle("open");
}

window.onscroll = function () {
    const button = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  