document.addEventListener('DOMContentLoaded', function() {
  // Banner rotation
  let banners = document.querySelectorAll('.banner');
  let dots = document.querySelectorAll('.dot');
  let currentBanner = 0;

  function showBanner(index) {
      banners[currentBanner].classList.remove('active');
      dots[currentBanner].classList.remove('active');
      banners[index].classList.add('active');
      dots[index].classList.add('active');
      currentBanner = index;
  }

  function nextBanner() {
      let nextIndex = (currentBanner + 1) % banners.length;
      showBanner(nextIndex);
  }

  setInterval(nextBanner, 5000); // Change banner every 5 seconds

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showBanner(index));
  });

  // Mobile menu toggle
  const menuIcon = document.getElementById('menu');
  const closeIcon = document.getElementById('close-menu');
  const mobileNavbar = document.getElementById('mobile-navbar');

  menuIcon.addEventListener('click', () => {
      mobileNavbar.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
      mobileNavbar.style.display = 'none';
  });

  // Hide mobile menu on click outside
  document.addEventListener('click', (event) => {
      if (!mobileNavbar.contains(event.target) && event.target !== menuIcon) {
          mobileNavbar.style.display = 'none';
      }
  });
});