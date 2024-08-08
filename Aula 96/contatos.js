import { contatos } from "./bancoContatos.js";


let contato={
    getTodosContatos: function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDOM){
        const cont = {
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont)
        destinoDOM.innerHTML=""
        contatos.forEach((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class","contato")
            div.setAttribute("data-nome", c.nome)
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            const btn_apagar = document.createElement("button")
            btn_apagar.setAttribute("id","btn_apagar")
            btn_apagar.innerHTML= "Apagar"
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn_apagar)
            destinoDOM.appendChild(div)
            console.log(novoContato)
        })
    },
    removerContado:function(elemento){
        console.log(elemento.target)
    }
}

export default contato