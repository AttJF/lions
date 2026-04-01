const prompt = require('prompt-sync')()

const avaliarTemperatura = (list)=> {
media=(list[0]+list[1]+list[2])/3
if(media>30){
    return "Alerta de Aquecimento"
}
else{
    return "Clima Estavel"
}
}
let control=[]
let numero 
for(i=0;i<3;i++){
    numero = parseInt(prompt("temperatura"))
    control.push(numero)
}
console.log(avaliarTemperatura(control))
console.log(control)
