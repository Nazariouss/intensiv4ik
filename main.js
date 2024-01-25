age = 19
function canSmoke(age){
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

console.log(canSmoke(age))

let can_smoke = function(age){
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

console.log(can_smoke(age))

let csmok = (age) => {
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

console.log(csmok(age))

//Створити функцію перепустку allowedTOIn(name, age, department)
function allowedTOIn(name, age, department) {
    if (name == 'Толік' && age >= 18 && department == 'QA') {
        return true
    } 
    return false
}   

console.log(allowedTOIn("Толік", 21, 'QA'))