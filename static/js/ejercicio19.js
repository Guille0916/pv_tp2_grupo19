const parrafo = document.querySelector(`.parrafo`);
const boton = document.querySelector(`.boton`);

boton.addEventListener('click', () => {
    parrafo.textContent = `Hola usuario`;
});
