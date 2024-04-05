n = 0
max = 100

for(let i = n; i< max; i++){
    if(i > 10){
        break
    }
    console.log(i)
}

for(let i = n; i< max; i++){
    if(i%2!=0){
        continue
    }
    console.log(i)
}