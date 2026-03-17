const prompt = require ('prompt-sync')();


let nome = prompt('nome: ')
let peso = parseFloat(prompt('peso: '))
let meta = prompt('meta: ')
let novod = parseFloat(prompt('ultima distancia percorrida'))
let atleta = {
    nome : nome,
    peso: peso,
    meta: meta,
    distancia: [20,20,20],
}

atleta.distancia.push(novod)

let media = (atleta.distancia[1]+atleta.distancia[2]+atleta.distancia[3])/3

if(media>20&& atleta.meta=='emagrecimento'){
    atleta.peso = atleta.peso - 1
    atleta.selo ='Meta Atinginda'
}

if(meta=='performance'&&atleta.distancia[3]>atleta.distancia[2]){
    atleta.selo='Novo Record'
}

console.log(atleta)
