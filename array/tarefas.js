const prompt = require('prompt-sync')();
let tarefas= []
let tarefa1 = prompt("digite a 1 tarefa")
let tarefa2 = prompt("digite a 2 tarefa")
let tarefa3 = prompt("digite a 3 tarefa")
tarefas.push(tarefa1)
tarefas.push(tarefa2)
tarefas.push(tarefa3)
console.log('Voce tem '+tarefas.length+ " tarefas pendentes")

tarefas.pop()

console.log('Voce tem '+tarefas.length+ " tarefas pendentes")