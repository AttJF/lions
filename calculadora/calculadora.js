const prompt = require('prompt-sync')();

console.log('vamos fazer uma media simples de 2 valores')

let nota1 = parseFloat(prompt("primeiro valor"))

let nota2 = parseFloat(prompt("segundo valor"))

let media = ( nota1 + nota2 )/2

console.log('a média é : ' + media )

