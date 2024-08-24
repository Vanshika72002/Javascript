// Task 5:Add a static method to the Person class that returns a generic greeting message. Call this static method withour creating an instance of the class and log the message  
//Task 6: Add a static property to the Student class to keep track of the numbers of students created. Increment this property in the constructor and log the toal number of students
class Person{
    name="Rahul";
    age=39;
    constructor(obj){
        this.name=obj.name;
        this.age=obj.age;
    }
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
    static studentCount=0;
    constructor(studentObj){
        console.log("student created")
        super(studentObj);
        Student.studentCount+=1;
        this.studentId=studentObj.id;
    }
    GetStudentId(){
        return this.studentId;
    }
    greet(){
        console.log(`Hello ${this.studentId}`)
    }
    static genericGreet(){
        return "Hello there!";
    }
}
console.log(Student.studentCount);
const RahulObj={
    name:"Rahul",
    age:39,
    id:"7890jkl789"

}
const GauravObj={
    name:"Gaurav",
    age:35,
    id:"1230jkl7569"
}
const DeepakObj={
    name:"Deepak",
    age:38,
    id:"3490jkl789"
}
const Rahul=new Student(RahulObj);
// console.log(Rahul);

const deepak=new Student(DeepakObj);
const Gaurav=new Student(GauravObj);

console.log("total students=",Student.studentCount);
console.log(Student.genericGreet());