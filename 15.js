let filme = {
    nome: "",
    clas: 0,
}

filme.nome = String(prompt("Qual o nome do Filme? "))
filme.clas = String(prompt("Qual sua classificação indicativa? "))

console.log("O nome do filme é ", filme.nome)
console.log("Classificação indicativa: ", filme.clas)