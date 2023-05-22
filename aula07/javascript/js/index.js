//diferença entre const, var e let
//declarção de varável com var e let
//declaração de constantes com const. Aquio valor nunca será alterado
//a declaração com var tem escopo(visibilidade) fora da estrutura
//declarar com let tem escopo(visibilidade) local,ou seja, dentro da estrutura
var nome = "Cleber";
let sobrenome = "Joséfino";

console.log(nome, sobrenome);

if(nome=="Helena"){
    var dados="É uma pessoa de idade 63 anos";
    let mais = " e também é aposentado";
}
console.log(dados);

const texto = "Mensagem";
console.log("O valor da constante é "+texto);
console.log(texto.toUpperCase());

