var statu = "Entrou"
var res = statu == "Entrou" ? "Ativo" : "Inativo"
var time = new Date()
var hora = 0

if (res == "Ativo" && hora < 12){
    console.log("Bom dia")
}else if(res == "Ativo" && hora >= 12 && hora < 18){
    console.log("Boa tarde")
}else if(res == "Ativo" && hora >= 18){
    console.log("Boa noite")
}else{
    console.log("Inativo")
}