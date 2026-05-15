const opciones = document.querySelector(`.opciones`);
const resultado = document.querySelector(`.resultado`);


opciones.addEventListener('change', (event) =>{

    if (event.target.name === 'lenguaje') {
        resultado.textContent = event.target.value;
        console.log(event.target.value);
    }
});
