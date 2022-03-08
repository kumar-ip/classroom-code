function getEmployee(id, name, sal) {

    var empId = id;
    var empName = name;
    var salary = sal;

    function setSalary(sal) {
        salary = sal;
    }

    function setName(name) {
        empName = name;
    }

    function setId(id) {
        empId = id;
    }

    function hike(pct) {
        salary += (salary * (pct/100));
    }

    function getDetails() {
        return `${empId} - ${empName} - ${salary}`;
    }

    return {
        setSalary: setSalary,
        setName: setName,
        setId: setId,
        hike: hike,
        getDetails: getDetails
    }


}

var emp1 = getEmployee();
emp1.setId(101);
emp1.setName("WBL");
emp1.setSalary(1000);

emp1.hike(20);

console.log(emp1.getDetails());


var emp2 = getEmployee(102, "IP", 5000);
emp2.hike(27);
console.log(emp2.getDetails());