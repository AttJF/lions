const prompt = require('prompt-sync')()

let stock=[
    livro1={
        author:"machado",
        title:"assis",
        disponivel:true
    },
    livro2={
        author:"heminway",
        title:"kys",
        disponivel:true
    },
    livro3={
        author:"frankfurd",
        title:"economy",
        disponivel:true
    }
]
function emprestar(name){
    for (const element of stock) {
        if(element.title == name && element.disponivel){
            element.disponivel = false;
            console.log('locação realizada com sucesso');
            return;
        } else if (element.title == name && !element.disponivel){
            console.log('livro ja locado');
            return;
        }
    }
    console.log("livro não disponivel na biblioteca");
}
let opt
let control=true
let request
while(control){
    console.log("1- Emprestar livro\n2- Ver todos os livros (exibindo o título e a disponibilidade de cada um)\n3- Sair")
    opt = prompt("")

    switch(opt){
    case '1':
    request = prompt('nome do livro para locar?')
    emprestar(request)
    break;

    case '2':
    console.log(stock)
    break;
    case '3':
    control=false
    break;
}
}