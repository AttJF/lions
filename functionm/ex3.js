const prompt = require('prompt-sync')()


let pedido = {
    cliente : prompt("seu nome?")
}

let quest=parseFloat(prompt("o que deseja comprar? 1 - Fone 2 - Teclado 3 - Mouse"))

switch(quest){
    case 1:
        pedido.item="Fone"
        pedido.valorFinal=800
    break;
    case 2:
        pedido.item="Teclado"
        pedido.valorFinal=120
    break;
    case 3:
        pedido.item="Mouse"
        pedido.valorFinal=80
    break;
    default:
        pedido.item="Desconhecido"
        pedido.valorFinal=0
    break;
}

console.log(pedido)