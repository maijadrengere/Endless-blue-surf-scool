
const bildes = ['bilde.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let fotoNr = 0;

function mainitBildi() {
  fotoNr = (fotoNr + 1) % bildes.length;
  const bilde = document.getElementById('galerijas-bilde');
  bilde.style.opacity = '1';
  bilde.src = bildes[fotoNr];
}

window.onload = function() {
    bildes.forEach(src => {
    const bilde = new Image();
    bilde.src = src;
  });
};
