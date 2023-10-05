let employees = {
    name: 'John Doe',
    age: 25,
    salary: 50000,
    title: 'Server',
    work: function(){
        console.log(employees.name +' is working')
    },
    takeABreak: function(){
        console.log(employees.name + ' is taking a break')
    },
    attendAMeeting: function(){
        console.log(employees.name + ' is attending a meeting')
    }
};

console.log(employees.name)
console.log(employees.age)
console.log(employees.salary)
console.log(employees.title)
employees.work()
employees.takeABreak()
employees.attendAMeeting()