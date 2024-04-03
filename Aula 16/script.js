//let num = [10, 20, 30, 40, 50]

//for(let i = 0; i < num.length; i++){
 //   console.log(num[i])
//}

/*for(n in num){
    console.log(n)
}
for(o of num){
    console.log(o)
}*/

const obj = [...document.getElementsByTagName('div')]

for(n in obj){
    console.log(n)
}

for(o of obj){
    console.log(o)
}