export function media (b){
    if (b.length ==0){
        return 0
    }
    let result=0
    let index=0
    b.forEach(element => {
        result += element
        index++
    });
    return result/index
}

export function mediana (b){
    if (b.length ==0){
        return 0
    }
    b.sort((a,b)=>a-b)
    const n=b.length
    const meio = (n - (n % 2)) / 2
    if (n % 2 === 0) {
        return (b[meio - 1] + b[meio]) / 2
    } else {
        return b[meio]
    }
}