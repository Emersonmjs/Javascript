const relogio_div = document.querySelector("#relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const alarme = document.querySelector("#alarme")
const hora_alarme = document.querySelector("#hora_alarme")
const data = new Date()

let som_alarme = new Audio("alarm-no3-14864.mp3")




som_alarme.loop=-1

let ts_atual = null
let ts_alarme = null
let alarme_ativado= false
let alarme_tocando = false
// console.log(Date.now())

btn_ativar.addEventListener("click", ()=>{
    ts_atual= Date.now()
    ts_alarme = ts_atual+(alarme.value*1000)
    alarme_ativado= true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML= "Hora do Alarme:"+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML="Hora do Alarme:"
    alarme.value= 0
    som_alarme.pause()
    som_alarme.currentTime = 0
})

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
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
        }
    }
}

const intervalo = setInterval(relogio,1000)