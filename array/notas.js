const prompt = require ('prompt-sync')();
let arrayn=[]
let nota1 = parseFloat(prompt("digite a primeira nota"))
let nota2 = parseFloat(prompt("digite a segunda nota"))

arrayn.push(nota1)
arrayn.push(nota2)

media = (arrayn[0]+arrayn[1])/2

console.log ('Nota1: '+arrayn[0]+' Nota2: '+ arrayn[1]+ ' media: ' +media)