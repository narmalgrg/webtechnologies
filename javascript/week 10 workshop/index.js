const person = new Object();
person.firstName = "jack";
person.lastName = "Doe";
person.age  = 14;

document.getElementById("demo").innerHTML = person.firstName+ person.lastName + person.age;

function employee(id, name, salary){
    this.id= id;
    this.name =name;
    this.salary=salary;
}
 e= new employee(90, "jack", 30000);

