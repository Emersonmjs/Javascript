const data = new Date()

// console.log(Date.now())


var dia = data.getDate()
dia= dia<10?"0"+dia:dia
var mes = data.getMonth()
mes = mes<10?"0"+mes:mes
console.log(`${dia}/${mes}/${data.getFullYear()}`)