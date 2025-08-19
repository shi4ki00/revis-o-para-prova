1) O retorno NaN em JavaScript significa Not a Number e ocorre quando uma operação que deveria resultar em número falha, por exemplo ao tentar dividir 0/0 ou multiplicar uma string não numérica por um número.

2) O CSS pode ser adicionado de três formas: inline, diretamente na tag com o atributo style (ex.: <p style="color:red;">); interno, dentro da tag style no head (bom para páginas únicas); e externo, em um arquivo separado .css vinculado por link (melhor para projetos grandes, pois facilita a manutenção). A diferença principal está na prioridade e na organização: o inline tem maior prioridade, mas é mais difícil de manter, enquanto o externo é mais organizado e recomendado.

3) A tag div é um elemento de bloco, usada para estruturar seções maiores da página, enquanto a <span> é inline, usada para destacar ou estilizar trechos pequenos dentro de um texto sem quebrar a linha. Exemplo: div para agrupar um cabeçalho com título e parágrafo; <span> para deixar apenas uma palavra colorida dentro de uma frase.

4) A tag <head> serve para armazenar metadados do documento HTML, informações que não aparecem diretamente na página. Dentro dela podem estar elementos como <title> (título exibido na aba do navegador), <meta> (configurações de charset, autor ou descrição) e <link> (ligação com arquivos CSS).

5) As listas ordenadas ol apresentam os itens numerados, já as listas não ordenadas ul usam marcadores (bolinhas, quadrados etc.). Exemplo de lista ordenada: <ol><li>Primeiro</li><li>Segundo</li></ol>. Exemplo de lista não ordenada: <ul><li>Maçã</li><li>Banana</li></ul>.

6) A propriedade display no CSS define como o elemento é exibido. O valor block faz o elemento ocupar toda a largura disponível e quebrar a linha (ex.: div); o valor inline faz o elemento ocupar apenas o espaço do conteúdo, sem quebra de linha (ex.: span); e o inline-block combina os dois: fica na mesma linha como inline, mas permite definir largura e altura como block.

7) O box model CSS é essencialmente uma caixa que envolve cada elemento HTML. Ele consiste em: conteúdo, preenchimento, bordas e margens. A imagem abaixo ilustra o modelo de caixa. Explicação das diferentes partes (da parte mais interna para a parte mais externa) 
Conteúdo - O conteúdo da caixa, onde aparecem o texto e as imagens
Padding - Limpa uma área ao redor do conteúdo. O preenchimento é transparente
Borda - Uma borda que circunda o preenchimento e o conteúdo
Margem - Limpa uma área fora da borda. A margem é transparente

8) As tags semânticas do HTML5 têm a função de dar significado ao conteúdo, facilitando a compreensão da estrutura por navegadores, buscadores e leitores de tela. O header representa o cabeçalho da página ou de uma seção, geralmente com título e menu. O section define uma seção temática de conteúdo. Oarticle> representa um conteúdo independente, como uma notícia ou postagem. Já o footer é o rodapé da página ou de uma seção, usado para informações adicionais, como contatos ou direitos autorais.

9) O atributo target="_blank" faz com que um link seja aberto em uma nova aba ou janela do navegador. No entanto, ele pode abrir brechas de segurança, como o tabnabbing, em que a aba aberta tenta manipular a página original. Por isso, é recomendável usar também rel="noopener noreferrer", que impede essa vulnerabilidade.

10) A propriedade flex faz parte do Flexbox, um modelo de layout usado para organizar elementos de forma flexível dentro de um container. Ela define como os itens crescem ou encolhem em relação uns aos outros para ocupar o espaço disponível. Por exemplo, em um container com display: flex, é possível fazer um item ocupar o dobro do espaço de outro usando flex: 2 em vez de flex: 1.

11) As transições no CSS permitem que mudanças em propriedades aconteçam de forma gradual, criando animações simples. Elas são muito usadas em efeitos de hover. Por exemplo, um botão pode mudar de cor e aumentar de tamanho suavemente quando o mouse passa por cima
.botao {
  background: blue;
  color: white;
  transition: background 0.5s, transform 0.5s;
}
.botao:hover {
  background: darkblue;
  transform: scale(1.1);
}
16) Quais as diferenças entre criar uma variável do tipo const, var e let? Cite exemplos.
Podemos usar const, var e let no código do JavaScript.O Var é o mais antigo, tem escopo de função ( vale dentro de toda a função) e permite redeclarar a variável no mesmo lugar, o que pode gerar problemas no código.O let é o mais moderno, tem escopo de bloco( só vale dentro das chave que ele foi criado e não pode ser redeclarado, mas o valor pode ser alterado.Já o const também tem escopo de bloco, mas não permite alterar o valor depois de definido.Porém em um objeto, podemos mudar o conteúdo interno, mas não trocar a variável interna.

17) 
let y = 20;
const z = 30;

console.log("1) x =", x); // 1) x = undefined 

x = 15;
y = 25;

console.log(x); // 15
console.log(y); // 25
console.log(z); // 30
var x = 10;

{
    var a = 100;
    let b = 200;
    const c = 300;


console.log(a); // 100
console.log(b); // 200
console.log(c); // 300
}

console.log(a);         // 100 
console.log(typeof b);  // "undefined" 
console.log(typeof c);  // "undefined"

{
    var m = "var da função";
    let n = "let da função";
    const o = "const da função";
    console.log(m); // "var da função"
    console.log(n); // "let da função"
    console.log(o); // "const da função"
}

console.log(typeof m); // "string" 
console.log(typeof n); // "undefined" 
console.log(typeof o); // "undefined"


18) Qual a diferença entre JavaScript e Java?
Java é um linguagem compilada e orientada a objetos, usada principalmente para criar grandes aplicações, como sistemas corporativos ou sistemas de jogos.Já o JavaScript é uma linguagem interpretada, mais leve e criada para deixar as páginas da web mais interativas.

19) Qual a diferença entre == e === no JavaScript? Dê exemplos práticos
No JavaScript, == compara apenas os valores, fazendo conversão de tipo se necessário, enquanto === compara valor e tipo. Por exemplo, 5 ==’5’ é verdadeiro, mas 5 === ‘5’ é falso, porque os tipos são diferentes. O === é mais seguro para evitar erros.
 
20) O que são operadores lógicos (&&, ||, !) e como eles podem ser usados em condicionais? Exemplifique


Os operadores lógicos são usados para combinar e inverter condições em estruturas de decisão, como IF.O operador && retorna verdadeiro se todas as condições forem verdadeiras, o || retorna verdadeiro se pelo menos umas das condições forem verdadeiras.Já o operador ! inverte o valor lógico de uma condição, como em sim em não.


21) É possível adicionar novas propriedades a um objeto depois de criado? Como? 


Sim.Para isso, podemos usar a notação de ponto ou a notação de colchetes, atribuindo um valor à nova propriedade desejada. Por exemplo, se temos um objeto pessoa com nome e idade , podemos adicionar uma propriedade altura usando pessoa.altura= 1.75 ou  pessoa[“altura”] = 1.75.


22) Qual a diferença entre null e undefined no JavaScript? 
No JavaScript, undefined  significa que uma variável foi declarada, mas ainda não recebeu valor, enquanto null  é um valor que o programador atribui intencionalmente para indicar que a variável está vazia.

23) O que é um objeto em JavaScript e como ele é declarado? Dê um exemplo básico.

Em JavaScript, um objeto é uma estrutura que permite armazenar valores e funções organizados em propriedades, que são pares de chave e valor. Ele é usado para representar entidades do mundo real ou agrupar informações relacionadas em um único elemento. Um objeto é declarado usando chaves {} e suas propriedades são definidas dentro delas. Por exemplo, podemos criar um objeto pessoa com as propriedades nome, idade e uma função saudação, que permite acessar os dados ou executar ações relacionadas a esse objeto.
