const botonColor = document.querySelector(`#botonColor`);
const colores = [`#f8d7da`, `#d1ecf1`, `#d4edda`, `#fff3cd`, `#e2d9f3`];

botonColor.addEventListener('click', () => {
   
    const posicion = Math.floor(Math.random() * colores.length);
    const color = colores[posicion];

    document.body.style.backgroundColor = color;
    console.log(`El color de fondo cambio a: ${color}`);
});

