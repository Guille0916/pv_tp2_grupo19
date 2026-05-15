const texto = document.querySelector(`#texto`);
const parrafo = document.querySelector(`.parrafo`);

texto.addEventListener('input' , (event) =>{

    event.preventDefault();
    
    parrafo.textContent = event.target.value;

    if(event.target.value.length >= 20) {
        parrafo.style.background = 'red';
    } else {
        parrafo.style.background = '#f5f5f5';
    }
});
