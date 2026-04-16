import buildId from "./buildId.js"
import dados from "./dados.js"
import bookCon from "./bookCon.js"
import promptSync from "prompt-sync"
import sheet from "./sheet.js"
import att from "./att.js"
const prompt = promptSync()
const { pacientes, medicos, consultas } = dados

let op = 2
let op2
let mok={

}
let control2
while(op!=99){
    console.log("informe qual operação gostaria de fazer \n1-cadastro\n2-att\n3-listar\n4-deletar")
    op = parseInt(prompt())
    op2=1
    switch(op){
    case 1:
        mok.descricao = prompt("descricao")
        mok.idMedico = parseInt(prompt("idmedico"))
        mok.idPaciente = parseInt(prompt("idpaciente"))
        mok.data = prompt("data")
        bookCon(mok.data,mok.descricao,mok.idMedico,mok.idPaciente)
        prompt
        break
    case 2:
        control2 =parseInt(prompt("informe o id"))
        att(control2)
        break
    case 3:
        sheet(consultas)
        break
    case 4:

    default:
        break
        }
}

