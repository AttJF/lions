const prompt = require('prompt-sync')()

let cacha ={
    operator : prompt("Seu nome :"),
    value: "0",
    history:[]
}

function registraVenda (cacha,value){
   cacha.value += value
   cacha.history.push(value,"entrada")
   return
}
function registraSaida (cacha,value){
    if(cacha.value<value){
        console.log("sem caixa disponivel")
        return
    }
    cacha.value -= value
    cacha.history.push(value,"saida")
    return
 }
let control1 = "a"
let valor = 0
while(control1!="s"){
    control1 = prompt("digite a operação que gostaria de fazer : v- venda| d-compra| s-sair")
    switch(control1){
        case "v":
            valor= parseFloat(prompt("informe o valor vendido"))
            registraVenda(cacha,valor)
            break;
        case "d":
            valor= parseFloat(prompt("informe o valor gasto"))
            registraSaida(cacha,valor)
            break;
        default:
            console.log("operation not found")
            break;
    }
}
console.table(cacha)
