const url=document.getElementById("url")
const btn_url= document.getElementById("btn_url")
const res = prompt("Oque teve")
console.log(res)
btn_url.addEventListener("click",(evt)=>{
    //window.location= "https://www.google.com/" //Redirecionamento com link online ou arquivo
    //window.location.replace("https://www.google.com/") //Deleta a URL corrente do histórico
    //window.location.assign("https://www.google.com/") //Não deleta a URL corrente do histórico
    //Todo método que tiver void significa que ele não precisa de parâmetro
    //window.location.reload() //Recarrega a página.
    //window.history.back()//Voltar para a página anterior no histórico
    //window.history.forward()//Vai para a próxima página no histórico
    // window.history.go(1)//Esse vai fazer a navegação em páginas pelo número do histórico. Como no caso foi um ele vai ir para a próxima página do histórico. O número pode ser positivo para próxima ou negativo para anterior.
    window.location= url.value
})