const notas=[5,6,8,9,7,4,5,8,10,9];
let contadorAprobados=0;
let suma=0;
let promedio=0;

for(let i=0;i<notas.length;i++){
    console.log(`Nota: ${notas[i]}`)
    suma=suma+notas[i];
}

 console.log(`---------Notas aprobada-------`);
for(let i=0;i<notas.length;i++){
    if(notas[i]>=6){
       console.log(`Nota:${notas[i]}`);
        contadorAprobados++;
    }
}
console.log(`---------Notas desaprobada-------`);
for(let i=0;i<notas.length;i++){
    if(notas[i]<6){
        console.log(`Nota:${notas[i]}`);
    }
}

promedio = suma/notas.length;

console.log(`El promedio de las notas es: ${promedio}`);
console.log(`La cantidad de aprobados es: ${contadorAprobados}`);