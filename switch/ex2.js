const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("qual a sua nota?"))

switch(true){

    case nota>=90&&nota<=100:
        console.log(`nota A`)
        break;

    case nota>=80&&nota<90:
        console.log(`nota B`)
        break;

    case nota>=70&&nota<80:
        console.log(`nota C`)
        break;

    case nota>=60&&nota<70:
        console.log(`nota D`)  
        break;

    case nota<60:
        console.log(`nota F`)    
        break;
        
    default:

    console.log('Nota invalida')
    break;
}
