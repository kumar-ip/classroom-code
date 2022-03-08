function getEmployee(id) {

    var empName = 'WBL';
    var id = id;
    var salary = 100.00;

    let getDetails = function() {
        return `${empName} - ${salary} - ${id}`;
    }

    let hikeSalary = function(pct) {
        salary += pct * 0.01 * salary;
    }

    return {
        "getDetails": getDetails,
        "hikeSalary": hikeSalary,
        name: 'Employee',
        "id": id
    }


}

let emp1 = getEmployee(10);
console.log(emp1.getDetails());
emp1.hikeSalary(5);
console.log(emp1.getDetails());