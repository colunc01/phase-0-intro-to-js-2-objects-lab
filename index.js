// Write your solution in this file!
// Create Employee object
//const workforce ={}; // might be used to add employees later

const employee = {
    name: "Cesar",
    streetAddress: "Chicago St.",
}; 

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    // should mutate the employee object passed in
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    // spread operator
    const newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}