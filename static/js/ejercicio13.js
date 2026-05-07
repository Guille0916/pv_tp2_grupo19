let cantidad = parseInt(prompt(`Ingrese cantidad a almacenar: `));

let array = [];
let faltantes= cantidad;

for(let i=0; i<cantidad; i++){

    array.push(parseInt(prompt(`Ingrese un numero:\nCantidad faltante: ${faltantes} `)));
    faltantes--;
}

array.forEach(numero => {

    document.write(`${numero}<br>`);
    console.log(numero);
});
