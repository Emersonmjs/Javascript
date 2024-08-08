const f_texto = document.querySelector("#f_texto")
const btn_texto = document.querySelector("#btn_texto")
const f_msg = document.querySelector("#f_msg")

btn_texto.addEventListener("click",(evt)=>{
    
})

let num = 10
let curso = "Bootstrap"
//window.localStorage.setItem("numero",num)
// localStorage.setItem("nome","Aleatório") //Definir a chave
// localStorage.setItem("canal","Bom")
// localStorage.setItem("curso",curso)
//alert(localStorage.length) //Quantidade de chaves que tem no armazenamento local.
//alert(localStorage.getItem(localStorage.key(0))) //Utilize o key para ter o nome da chave no indice desejado.
// alert(localStorage.getItem("nome")) //Obter o valor da chave
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))
localStorage.clear() //Remove todas as chaves.

//window.localStorage.setItem("numero",num)
sessionStorage.setItem("nome","Aleatório") //Definir a chave
sessionStorage.setItem("canal","Bom")
sessionStorage.setItem("curso",curso)