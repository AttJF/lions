import PromptSync from "prompt-sync"
const prompt = PromptSync()
let b 
let result = 0
let op1
let op2
b=prompt("Digite a operação que gostaria de fazer : +,-,*,/,% ")
op1=parseFloat(prompt('primeiro valor'))
op2=parseFloat(prompt('segundo valor'))
while(b!="p"){
switch(b){
    case '+':
    result=soma(op1,op2)
    break;
    case '*':
    result=times(op1,op2)
    break;
    case '/':    
    result=div(op1,op2)
    break;
    case '-':
    result=minus(op1,op2)
    break;
    case "p":
    console.log("fechando...")
    break;
    case "%":
    result=perc(op1,op2)
    break
    default:
    console.log('operação não identificada')
    break
}
console.log(result)
b=prompt("Digite a operação que gostaria de fazer : +,-,*,/,% ")
op2=parseFloat(prompt('proximo valor'))
op1=result
}

export function soma(op1,op2){
    return op1+op2
}
export function minus(op1,op2){
    return op1-op2
}
export function div(op1,op2){
    if(op2==0){
        console.log("invalid operation")
        return 0
    }
    return op1/op2
}
export function times(op1,op2){
    return op1*op2
}
export function perc(op1,op2){
    return (op1*op2)/100
}