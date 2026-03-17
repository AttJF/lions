const prompt = require ('prompt-sync')();

let nome = prompt('nome :')


let cliente = {
    nome: nome,
    hist: [
        voo ={
            destino:'paris',
            distancia:1000
        },
        voo2 ={
            destino:'instanbul',
            distancia:1000
        }]
}

let voo3 ={
    nome : prompt('lugar'),
    distancia: parseFloat(prompt('distancia'))
}

cliente.hist.push(voo3)

let soma = cliente.hist[0].distancia + cliente.hist[1].distancia + cliente.hist[2].distancia

cliente.saldo=soma

if(cliente.saldo>5000){
    cliente.saldo= cliente.saldo-5000
    cliente.categoria='platinum'
}else{
    cliente.categoria="gold"
}

console.log(cliente)