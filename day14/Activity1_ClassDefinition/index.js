//Task 1:Define class Person with properties name and age and a method to return a geeting message. Create an instance and log the greeting message

//Task 2:Add a method to the Person class that updates the age property and logs the updated age
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
// export default Person;  //Unexpected token 'export'
const Rahul=new Person;
Rahul.greet();
Rahul.updateAge();
