const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
new CircleType(document.getElementById('circle'));
new CircleType(document.getElementById('circle1'));

window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('.content p');
    const content = text.textContent;
    const characters = content.split('');
  
    text.innerHTML = ''; // Clear the original content
  
    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.02}s`;
      span.style.background = 'linear-gradient(rgb(184, 255, 184), rgb(113, 170, 122))';
      span.style.webkitTextFillColor = 'transparent';
      span.style.webkitBackgroundClip = 'text';
      span.style.backgroundSize = '100%';
      text.appendChild(span);
    });
  });


  const playButtons = document.querySelectorAll(".media-button");
  const backgroundMusic = document.getElementById("backgroundMusic");
  
  playButtons.forEach(button => {
    const playIcon = button.querySelector(".fa-play");
    const pauseIcon = button.querySelector(".fa-pause");
  
    button.addEventListener("click", () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
  
        // Show the pause icon in all other buttons too
        playButtons.forEach(otherButton => {
          if (otherButton !== button) {
            const otherPlayIcon = otherButton.querySelector(".fa-play");
            const otherPauseIcon = otherButton.querySelector(".fa-pause");
            otherPlayIcon.style.display = "none";
            otherPauseIcon.style.display = "inline";
          }
        });
      } else {
        backgroundMusic.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
  
        // Show the play icon in all other buttons too
        playButtons.forEach(otherButton => {
          if (otherButton !== button) {
            const otherPlayIcon = otherButton.querySelector(".fa-play");
            const otherPauseIcon = otherButton.querySelector(".fa-pause");
            otherPlayIcon.style.display = "inline";
            otherPauseIcon.style.display = "none";
          }
        });
      }
    });
  });
  
  
  
  


