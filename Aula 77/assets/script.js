const relogio_div = document.querySelector("#relogio")
const data = new Date()


// console.log(Date.now())


var dia = data.getDate()
dia= dia<10?"0"+dia:dia
var mes = data.getMonth()
mes = mes<10?"0"+mes:mes
console.log(`${dia}/${mes}/${data.getFullYear()}`)

const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0"+hora:hora
    let minuto = data.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto
    let segundo = data.getSeconds()
    segundo = segundo<10?"0"+segundo:segundo
    let hora_completa = hora+":"+minuto+":"+segundo
    relogio_div.innerHTML=hora_completa
}

const intervalo = setInterval(relogio,1000)