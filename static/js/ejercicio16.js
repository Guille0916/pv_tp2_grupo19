const sumarRango = (a, b) => {

    let resultado = 0;

    for (let i = a; i <= b; i++) {
        resultado += i;
    }

    return resultado;
};

console.log(sumarRango(2, 8));
