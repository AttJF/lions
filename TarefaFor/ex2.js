const prompt=require("prompt-sync")()

let temperatura = parseInt(prompt("temperatura para calibragem"))

for(i=0;i<5;i++){
    temperatura += 2
    console.log(`temperatura calibrada para ${temperatura} C`)

}