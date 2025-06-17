  function toggleMobileMenu() {
    document.getElementById('mobileSidebar').classList.toggle('show');
  }

  function toggleServiceDropdown() {
    const dropdown = document.getElementById('mobileServiceDropdown');
    const icon = document.getElementById('dropdownIcon');
    dropdown.classList.toggle('d-none');
    icon.classList.toggle('fa-angle-down');
    icon.classList.toggle('fa-angle-up');
  }


  // --------------------------hero----------------------------
   const images = [
     "https://brainartit.in/assets/slider-1-3-C00fXHL_.jpg",
  "https://brainartit.in/assets/slider-1-1-DbEuW9FC.png",
  "https://brainartit.in/assets/slider-1-2-DlKYrKsp.jpg"
  
];

let currentIndex = 0;
const hero = document.getElementById("hero");
const dots = document.querySelectorAll(".dot");
const overlayImg = document.getElementById("overlayImg");

function changeSlide(index) {
  currentIndex = index;
  hero.style.backgroundImage = `url(${images[currentIndex]})`;

  // Overlay slide-down animation
  overlayImg.classList.remove("animate-slideDown");
  void overlayImg.offsetWidth; // force reflow
  overlayImg.classList.add("animate-slideDown");

  // Dot indicator active toggle
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

setInterval(() => {
  const nextIndex = (currentIndex + 1) % images.length;
  changeSlide(nextIndex);
}, 5000);

// Initial load
changeSlide(currentIndex);
