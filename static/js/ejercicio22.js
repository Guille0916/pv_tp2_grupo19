const texto = document.querySelector(`#texto`);
const parrafo = document.querySelector(`.parrafo`);

texto.addEventListener( 'input' , (event) =>{

   
    parrafo.textContent =` ${event.target.value}`;
   
}
);
