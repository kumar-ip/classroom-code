const getEmployee = (name, age, salary) => {

    const getAnnualSalary = () => {
        return salary * 12;
    }

    const getEmployeeDetails = () => {
        return `Name: ${name} - Age: ${age} - Salary: ${getAnnualSalary()}`;
    }

    const hike = (percentage) => {
       salary = salary + (salary * percentage * 0.01);
    }

    return {
        getEmployeeDetails,
        hike
    }

}

const emp1 = getEmployee('John', 30, 5000);
emp1.getAnnualSalary()
emp1.hike(15);
console.log(emp1.getEmployeeDetails());