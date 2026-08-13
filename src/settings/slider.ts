// Las fotos del header son 16:9. En movil el hero es vertical, asi que de cada
// foto solo se ve una franja de ~26% del ancho: 'focus' marca que parte de la
// imagen queda a la vista. En escritorio se ve entera y se usa el centro.
export const slides = [
  // fila de rolls de salmon en diagonal: llena el encuadre vertical
  { src: '/images/header/02.jpg', focus: '50%' },
  // macro de los rolls de atun: el trozo grande queda a la derecha
  { src: '/images/header/03.jpg', focus: '58%' },
  // plato con el futomaki grande a la derecha
  { src: '/images/header/05.jpg', focus: '72%' },
  // mesa completa con el mantel de la marca: el centro de comida esta a la izquierda
  { src: '/images/header/01.jpg', focus: '38%' },
  // fuente simetrica: el centro ya es el punto fuerte
  { src: '/images/header/04.jpg', focus: '50%' },
  // rolls arriba y la rosa de remolacha abajo a la derecha; el centro es plato vacio
  { src: '/images/header/06.jpg', focus: '60%' },
];

export const numberOfSlides = slides.length;
