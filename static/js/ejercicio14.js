let cantidad = parseInt(prompt(` Ingrese cantidad de numeros a agregar: `));

let array = [];
let faltantes = cantidad;

for(let i=0; i<cantidad; i++){

    array.push(parseInt(prompt(`Ìngrese numero: \n Cantidad faltante: ${faltantes}`)));
    faltantes--;
}

let duplicados = [];
const duplicar = (array) =>{

    array.forEach( numero => {
        
        duplicados.push(numero*2);
    });
};

duplicar(array);

duplicados.forEach(numero => {
    document.write(`${numero}<br>`);
    console.log(numero);
})
