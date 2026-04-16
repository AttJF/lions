import mok from "./mok.js"
export default function ad(name,email,phone){
    let id
    let control =true
        let newid
        mok.forEach((element,index) => {
            id=index
            if(element.email==email){
                control =false
                return
            }
        });
        if(mok.length>0){
            newid= (mok[mok.length-1].id+1)
        }else{
            newid=1
        }
        if(control){
        let a ={
            id: newid,
            name:name,
            email:email,
            telefone:[]
        }
        a.telefone.push(phone)
        mok.push(a)
        return
        }
        else{
            console.log(`email ${email} already in use`)
        }
    }
