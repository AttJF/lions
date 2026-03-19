const prompt = require('prompt-sync')()

let pedido=[]

let nome = prompt("nome do item")
let valor = parseFloat(prompt('valor R$:'))
let control = prompt('deseja adicionar mais um item ?(sim/nao)')
let item={
    nome:nome,
    valor:valor
}
let valorF=item.valor
pedido.push(item)
while(control =='sim'){
    let iten2 ={
        nome:prompt("nome do item"),
        valor:parseFloat(prompt('valor R$:'))
    }

    control = prompt('deseja adicionar mais um item ?(sim/nao)')
    pedido.push(iten2)
    valorF= valorF + iten2.valor
}
console.log(`Valor total do pedido : ${valorF}`)
console.log(pedido)