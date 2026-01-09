
// JavaScript para insertar el bloque HTML

document.querySelectorAll('.slider').forEach(slider => {
  const images = JSON.parse(slider.dataset.images);
  let index = 0;

  slider.style.backgroundImage = `url('${images[index]}')`;

  slider.querySelector('.next').addEventListener('click', e => {
    e.stopPropagation();
    index = (index + 1) % images.length;
    slider.style.backgroundImage = `url('${images[index]}')`;
  });

  slider.querySelector('.prev').addEventListener('click', e => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    slider.style.backgroundImage = `url('${images[index]}')`;
  });
});

