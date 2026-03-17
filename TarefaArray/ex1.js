let prompt = require('prompt-sync')();

let listaAlunos = ['joao','maria']

let terc = prompt("digite o nome do proximo aluno pf")

listaAlunos.push(terc)


if (listaAlunos.length==3){

    console.log('turma formada com sucesso" Alunos : '+ listaAlunos)
}