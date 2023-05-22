/* 
A função abaixo é chamada um por evento que está na página index.html.
O evento foi adicionado a um botão  com o comando onclick, ou seja,
quando o usuário clicar on botão será chamada a função mensagem
*/
function mensagem(){
var nome = prompt("Digite seu nome");
document.getElementsByTagName("p")[0].innerHTML=nome;
}

/*
Quando a página for carregada, ela irei chamar a função
apagaDisplay, pois a fubção apaga tela e adiciona o valor0(zero).
O evento utilizado serpa onload(quando carregar a página) aplicado no
body(document.body)
*/
const body = document.body;
body.onload =  apagarDisplay;

const display = document.getElementsByTagName("input")[0];
let valor1 = 0;
let valor2 = 0;
let resultado = 0;
let operador = "";

function apagarDisplay(){
    display.value="0";
}
function adicionar1(){
    if(display.value=="0"){
        display.value= 1
    }
    else{
        display.value+="1"; 
    }

}
function adicionar2(){
    if(display.value=="0"){
        display.value= 2
    }
    else{
        display.value+="2"; 
    }

}
function adicionar3(){
    if(display.value=="0"){
        display.value= 3
    }
    else{
        display.value+="3"; 
    }

}
function adicionar4(){
    if(display.value=="0"){
        display.value= 4
    }
    else{
        display.value+="4"; 
    }

}
function adicionar5(){
    if(display.value=="0"){
        display.value= 5
    }
    else{
        display.value+="5"; 
    }

}
function adicionar6(){
    if(display.value=="0"){
        display.value= 6
    }
    else{
        display.value+="6"; 
    }

}
function adicionar7(){
    if(display.value=="0"){
        display.value= 7
    }
    else{
        display.value+="7"; 
    }

}
function adicionar8(){
    if(display.value=="0"){
        display.value= 8
    }
    else{
        display.value+="8"; 
    }

}
function adicionar9(){
    if(display.value=="0"){
        display.value= 9
    }
    else{
        display.value+="9"; 
    }

}
function adicionar0(){
    if(display.value=="0"){
        display.value= 0
    }
    else{
        display.value+="0"; 
    }

}
function adicionarPonto(){
    /*
    Para o botão ponto estamos verificando se o 
    ponto ja foi adicionado, caso isso tenha acontecido,
    o ponto não será mais acrescido. Mas se o ponto 
    não foi adicionado, então será acrescentado ao display.
    Para verificar a existencia do ponto usamos o comando indexOf, 
    que tenta localizar o ponto no display.
    Quando o indexOf retorna -1 é porque não localizado 
    e assim adicionamos o ponto.
    */
    if(display.value.indexOf(".")==-1){
        display.value+= ".";
    }
}
function soma(){
    valor1 = parseFloat(display.value);
    operador= "+";
    apagarDisplay();
}
function subtrair(){
    valor1 = parseFloat(display.value);
    operador= "-";
    apagarDisplay();
}
function multiplicar(){
    valor1 = parseFloat(display.value);
    operador= "*";
    apagarDisplay();
}
function dividir(){
    valor1 = parseFloat(display.value);
    operador= "/";
    apagarDisplay();
}
function raiz(){
    valor1 = parseFloat(display.value)
    operador= "Math.sqrt"
    apagarDisplay();
}
function por(){
    valor1 = parseFloat(display.value)
    operador= "%" 
    apagarDisplay();
}
function igual(){
    if(operador == "+"){
        resultado = valor1+parseFloat(display.value)
        display.value=resultado;
    }
    else if(operador == "-"){
        resultado = valor1-parseFloat(display.value)
        display.value=resultado;
    }
    else if(operador == "*"){
        resultado = valor1*parseFloat(display.value)
        display.value=resultado;
    }
    else if(operador == "/"){
        resultado = valor1/parseFloat(display.value)
        display.value=resultado;
    }
    else if(operador == "Math.sqrt"){
        resultado = valor1/parseFloat(display.value)
        display.value=resultado;
    }
    else{}
}

console.log(Math.sqrt(49));
console.log(10*100)