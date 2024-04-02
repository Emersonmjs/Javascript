const obj1 = document.getElementsByTagName("div")
const obj2 = [...document.getElementsByTagName("div")]

obj2.forEach(element => {
    element.innerHTML = "Mudou"
    console.log(element)
});
