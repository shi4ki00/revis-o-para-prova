
let p1 = {
    nome: prompt("Nome do 1º Pokémon:"),
    tipo: prompt("Tipo (agua, fogo, terra):").toLowerCase(),
    poder: Math.floor(Math.random() * 10) + 1
};

let p2 = {
    nome: prompt("Nome do 2º Pokémon:"),
    tipo: prompt("Tipo (agua, fogo, terra):").toLowerCase(),
    poder: Math.floor(Math.random() * 10) + 1
};


if ((p1.tipo === "agua" && p2.tipo === "fogo") ||
    (p1.tipo === "fogo" && p2.tipo === "terra") ||
    (p1.tipo === "terra" && p2.tipo === "agua")) {
    p1.poder += 3;
} else if ((p2.tipo === "agua" && p1.tipo === "fogo") ||
           (p2.tipo === "fogo" && p1.tipo === "terra") ||
           (p2.tipo === "terra" && p1.tipo === "agua")) {
    p2.poder += 3;
}


console.log(p1.nome + " vs " + p2.nome);

if (p1.poder > p2.poder) console.log(p1.nome + " venceu!");
else if (p2.poder > p1.poder) console.log(p2.nome + " venceu!");
else console.log("Empate!");