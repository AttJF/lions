import mok from "./mok.js"

export default function att(id, newinfo){
    const indice = mok.findIndex(mok => mok.id===id)
    let control = true
    if(indice== -1){
        console.log("user not found")
        return
    }
    if(newinfo.email){
        mok.forEach(element => {
            if(newinfo.email==element.email&&id!=element.id){
                control=false
            }
        });
    }
    mok[indice].name=newinfo.name || mok[indice].name
    if (newinfo.telefone.length>0){
        mok[indice].telefone=newinfo.telefone
    }
    if(control){
        mok[indice].email=newinfo.email
    }else{
        console.log(`email already in use`)
    }
}