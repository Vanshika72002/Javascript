// Task 3:Define a class Student that extemds the class Person .Add the property studentId and a method to return the studentId.Create an instance and log the studentId
//Task 4:Override the greeing method in the Student class to include the studentId in the message. Log the overridden greeting message

// import Person from "./Activity1_ClassDefinition.js";❌❌NOT WORKING

class Person{
    name="Rahul";
    age=39;
    greet(){
        console.log("Hello!");
    }
    updateAge(){
        this.age=29;
        console.log(this.age);
    }
}
class Student extends Person{
    studentId;
    constructor(id){
        super();
        this.studentId=id;
    }
    GetStudentId(){
        return this.studentId;
    }
    greet(){
        console.log(`Hello ${this.studentId}`)
    }
}
const Rahul=new Student("asdfg7890-oijhbndm");
console.log(`Student Id : ${Rahul.GetStudentId()}`);
Rahul.greet();