const elementos = [...document.querySelectorAll("div")]
elementos.map((elemento, index)=>{
    elemento.addEventListener("click", ()=>{
        elemento.classList.toggle("destaque")
    })
})