const div = document.querySelector("#nome")
const btn_promessa = document.querySelector("#promessa")
btn_promessa.addEventListener("click", (evt)=>{
    div.innerHTML="Procesando..."
    promessa()
    // .then((estado)=>{
    //     div.innerHTML=estado
    //     div.classList.remove("error")
    //     div.classList.add("correct")
    // })
    
    // .catch((estado)=>{
    //     div.innerHTML=estado
    //     div.classList.add("error")
    //     div.classList.remove("correct")
    // })
})
const promessa = ()=>{
    let promise = new Promise((resolve, reject)=>{
        let estado = true
        let tempo = 3000
        setTimeout(()=>{
            if(estado){
                resolve("Deu tudo certo")
                div.innerHTML="Deu tudo certo"
                div.classList.remove("error")
                div.classList.add("correct")
            }else{
                reject("Deu tudo errado")
                div.innerHTML="Deu tudo errado"
                div.classList.add("error")
                div.classList.remove("correct")
            }
        },tempo)
    })
    return promise
}
div.innerHTML="Esperando..."