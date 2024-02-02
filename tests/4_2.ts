let pesik = {
    name:'Ivan',
    poroda:"Buldog"
}

let kotik = {
    age: 15,
    alive: true
}

let hamster = {
    isDead: function(){
        return true
    },
    parent:"previous hamster"
}

let obj1 = new Object({name:'Ivan', surname:'Bobko', age:21})
let obj2 = new Object({name:'Stepan', surname:'Bodko', age:13})
let obj3 = new Object({name:'Taras', surname:'Vovko', age:25})

let obj1_obj1 = Object.create(obj1)
obj1_obj1.child = 'Stepanka'

let obj2_obj2 = {
    child:"Ivanka",
    __proto__: obj1

}

let engineer = {
    name:"Vasya",
    surname:"Vasyanich",
    age: 48
}

let QA_engineer = Object.create(engineer)
QA_engineer.staj = 28
QA_engineer.isMaried = false    

for (let key in QA_engineer){
    console.log(`${key} - ${QA_engineer[key]}`)
}

let person = {
    __proto__: engineer,
    isAlive: () => {
        return false
    }
}

console.log(Object.values(engineer))
console.log(Object.values(QA_engineer))
console.log(Object.values(person))