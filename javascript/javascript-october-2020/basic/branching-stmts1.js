//branching statements - decisions. diamond
//if, if else, if elseif else
//switch case

//sequentially - 

function getBonus(emp) {

    var bonusBase = 50;

    if(emp.rating >= 4) {
        bonusBase += 50
    } else if(emp.rating >= 3) {
        bonusBase += 30
    } else if(emp.rating >= 2) {
        bonusBase += 20
    }

    if(emp.salary > 1000) { //boolean  || (emp.name != null && emp.department == "IT")
        bonusBase += 50;
    }

    return bonusBase;
}

var emp1 = {
    name: 'Kumar', 
    salary: 1100,
    rating: 3
}

console.log(getBonus(emp1));