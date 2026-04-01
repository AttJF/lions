const prompt=require('prompt-sync')()


const scoreDefiner= (value,coin)=> {
    switch (coin){
        case "USD":
            value = value *0.20
            return value
        case "YEN":
            value = value *20
            return value
        case "EURO":
            value = value *0.16
            return value
        default:
            console.log('moeda não identificada')
            return value
    }
    }
let value= parseFloat(prompt('quantidade em reais '))

let coin= prompt("moeda requerida ")

let nValue= scoreDefiner(value,coin)

console.log(coin+":"+nValue)