const prompt = require('prompt-sync')()

function bonus (salario, cargo){
    let bonus1
    switch(cargo){
    
    case "estagiario":
    bonus1 = salario *0.1
    break;
    case "Junior":
    bonus1 = salario *0.15
    break;
    case "Pleno":
    bonus1 = salario *0.2
    break;
    default :
    bonus1 = salario * 0
    break;
    
    }
    return bonus1
}

let salario = parseFloat(prompt("salario"))
let cargo = prompt ("cargo")

let bonification = bonus(salario,cargo)

console.log(bonification)