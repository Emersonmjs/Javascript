const long = document.querySelector("#long")
const lati = document.querySelector("#lati")

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)
}else{
    console.log("Geolocalização não suportada")
}

console.log(navigator.geolocation.getCurrentPosition(mostrarLocalização))


function mostrarLocalização(pos){
    console.log(pos)
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function erroLocalização(){
    console.log("Erro ao obter a localização")
}