const calcularMayor = (numero1, numero2) => {

    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    }

    return "los numeros son iguales";
};

console.log(calcularMayor(43,46));
