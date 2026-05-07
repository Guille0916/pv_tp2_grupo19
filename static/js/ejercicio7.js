const nombres = ["Juan", "Marcos", "Franco", "Sergio", "Guillermo", "Flavia"];
let nombreMasLargo ="";
let i=0;

for(i;i<nombres.length;i++){
    console.log(`Nombre: ${nombres[i]}`);
    if(nombres[i].length > nombreMasLargo.length){
        nombreMasLargo=nombres[i];
    }
}

console.log(`El nombre mas largo es: ${nombreMasLargo}`);

