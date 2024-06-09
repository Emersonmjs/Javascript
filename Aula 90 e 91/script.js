
const computador= {
    cpu: "i9",
    ram: "32gb",
    hd: "2TB",
    info(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

delete(computador.hd)

const c1 = Object.assign({},computador)

c1.info()

const c2 = Object.create(computador)
c2.info()

const o1= {obj1:"1"}
const o2= {obj2:"2"}
const o3= {obj3:"3"}
const o4= Object.assign(o1,o2,o3)
console.log(o4)