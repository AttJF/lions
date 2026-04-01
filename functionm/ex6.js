const prompt= require('prompt-sync')()



const scoreDefiner= (list)=> {
    total=list[0]+list[1]+list[2]
    if(total>200||list[2]>90){
        return "Veteran"
    }
    else{
        return "Newbie"
    }
    }

let control=[]
let numero 
for(i=0;i<3;i++){
        numero = parseInt(prompt("pontuação"))
        control.push(numero)
}

let rank = scoreDefiner(control)

console.log("Your rank is : "+rank)
