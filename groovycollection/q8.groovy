class Employee
{
String Name
int age
float salary
}
Employee e1=new Employee(Name:"John",age:12,salary:56600)
Employee e2=new Employee(Name:"Meenu",age:21,salary:10000)
Employee e3=new Employee(Name:"Khushboo",age:21,salary:40000)
Employee e4=new Employee(Name:"Prashant",age:23,salary:3000)
Employee e5=new Employee(Name:"Sachin",age:23,salary:2000)
Employee e6=new Employee(Name:"Shashi",age:23,salary:5000)
Employee e7=new Employee(Name:"Yati",age:23,salary:2000)
Employee e8=new Employee(Name:"Amit",age:45,salary:200)
Employee e9=new Employee(Name:"Kavita",age:34,salary:800)
Employee e10=new Employee(Name:"Kanchan",age:56,salary:1900)

List l1=[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10]
println ( "Salaries less than 5000 are "+ l1.findAll{it.salary < 5000 }.salary)

println l1.min{it.age}.name
println l1.max{it.age}.name
println l1.min{it.salary}.name
println l1.findAll{it.name}.name


