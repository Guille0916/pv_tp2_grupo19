 let km = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
    let litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));
    let consumo = litros / km;
    document.write(`Kilómetros recorridos: ${km} <br>`);
    document.write(`Litros consumidos: ${litros} <br>`);
    document.write(`Consumo de combustible por kilómetro: ${consumo.toFixed(2)} litros/km`);