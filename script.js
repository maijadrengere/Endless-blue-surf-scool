
const images = ['pic.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const img = document.getElementById('gallery-image');
  img.style.opacity = '1';
  img.src = images[currentImageIndex];
}

// Preload images for instant switching
window.onload = function() {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
