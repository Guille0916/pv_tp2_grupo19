const edades =[10,20,15,12,17,22,19,21,11,13]
let i =0;
let suma=0
let promedio=0;

for(i;i<edades.length;i++){
    console.log(`Edad: ${edades[i]}`);
    suma = suma + edades[i];
}

promedio = suma / edades.length;

console.log(`El promedio de edades es:${promedio}`);