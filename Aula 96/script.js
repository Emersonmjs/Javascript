import c from "./contatos.js"
const listaContatos = document.querySelector("#listaContatos")
const btn_gravar = document.querySelector("#btn_gravar")
const btn_apagar = document.querySelector("#btn_apagar")

btn_gravar.addEventListener("click", (evt)=>{
    const cont={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.addContato(cont,listaContatos)
    console.log(c.getTodosContatos())
})

c.getTodosContatos().forEach(()=>{
    btn_apagar.addEventListener("click", (quem)=>{
        c.getTodosContatos() = c.getTodosContatos().filter((el)=>{
            return el.nome != quem
        })
    })
    console.log(c.getTodosContatos())
})
