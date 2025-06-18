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

function triggerOverlayBars() {
  const bars = document.querySelectorAll(".overlay-bar");
  bars.forEach(bar => {
    bar.style.animation = "none";
    void bar.offsetWidth; // force reflow
    bar.style.animation = "";
    bar.classList.remove("overlay-bar"); // trigger reflow
    void bar.offsetWidth;
    bar.classList.add("overlay-bar");
  });
}

function changeSlide(index) {
  currentIndex = index;
  hero.style.backgroundImage = `url(${images[currentIndex]})`;

  // Bar effect re-trigger
  triggerOverlayBars();

  // Dot state
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

setInterval(() => {
  const nextIndex = (currentIndex + 1) % images.length;
  changeSlide(nextIndex);
}, 5000);