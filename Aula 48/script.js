const array = [1, 3, 6, 9]

array.reduce((anterior, atual, index)=>{
    console.log(anterior, atual, index)
    return atual
})