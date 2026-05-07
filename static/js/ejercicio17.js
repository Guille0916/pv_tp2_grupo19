function contarLetraA(string){

    let contador=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=="a"||string[i]=="A"){
            contador++;
        }
    }

    return contador;
}
console.log(contarLetraA("palabras"));