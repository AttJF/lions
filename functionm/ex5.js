const prompt = require('prompt-sync')()

console.log

function delivery(code){
    switch(code){
    case "E":
        return "Enviado"
        break
    case "P":
        return "Pendente de envio"
        break
    case "C":
        return "Cancelado"
        break;
    default:
        return "Invalido"
        break;
    }
}

let encomenda = {
    id : prompt("Id do pedido")
}

let codigo =prompt('qual o codigo atual do produto')

encomenda.status = delivery(codigo)

console.log(encomenda)