age = 19
function canSmoke(age){
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

let can_smoke = function(age){
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

let csmok = (age) => {
    if (age >= 18) {
        return "Покури братік"
    } else {
        return "Дядя витри молоко з губ"
    }
}

function allowedTOIn(name, age, department) {
    if (name == 'Толік' && age >= 18 && department == 'QA') {
        return true
    } 
    return false
}   
