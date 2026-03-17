const prompt = require ('prompt-sync')();

let pedido={
    nome: prompt('seu nome: '),
    base: 30,
    qnt: parseFloat(prompt('quantos sandubas vai querer hoje? ')),
    ext: [],
    valorfinal: 30

}
let int = parseFloat(prompt('quantos adicionais?'))
let adc = 0
let control =''
for(i=0;i<int;i++){
    control = prompt('igrediente ')
    adc = parseFloat(prompt('custo adicional'))
    pedido.ext.push(control)
    pedido.valorfinal= pedido.valorfinal + adc
}

if(pedido.ext.length ==2 && pedido.qnt >2){
    pedido.valorfinal=pedido.valorfinal*0.8
}
pedido.valorfinal = pedido.valorfinal*pedido.qnt
console.log(pedido)