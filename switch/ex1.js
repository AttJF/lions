const prompt = require('prompt-sync')()

let gender = prompt("qual o genero do filme que gostaria de ver?")

switch(gender){

    case 'acao':
        console.log(`filmes de ${gender} no canal 1`)
        break;

    case 'drama':
        console.log(`filmes de ${gender} no canal 2`)
        break;
    
    case 'comedia':
        console.log(`filmes de ${gender} no canal 3`)
        break;

    default:

    console.log('canal com o genero nao encontrado')
    break;
}
