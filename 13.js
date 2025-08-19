let pessoa1 ={
    nome:  "lucas",
    peso: 60,
    altura: 1.68,
    temperatura: 32
}

console.log("Nome da pessoa: ",pessoa1.nome)
console.log("Peso da pessoa: ", pessoa1.peso)
console.log("Altura da pessoa: ", pessoa1.altura)

if( pessoa1.temperatura >= 41){

    console.log("Hipertemia")

}

if( pessoa1.temperatura <= 41 && pessoa1.temperatura <= 39.6){

    console.log("Febre alta")
    
}

if( pessoa1.temperatura <= 37.6 && pessoa1.temperatura <= 39.5)
{

    console.log("Febre")

}

if(pessoa1.temperatura <= 36 && pessoa1.temperatura <= 37.5){

    console.log("Temperatura normal")

}

if( pessoa1.temperatura <= 35){

    console.log("Hipotermia")

}
   