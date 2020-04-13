var Person = function(name, yearOfBirth, salary) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.salary = salary;
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth);
    }
};

Person.prototype.printSalary = function() {
    console.log(this.salary);
};

var John = new Person("Johnas", 1999, 2000000);
John.calculateAge();
John.printSalary();
