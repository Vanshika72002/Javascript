// Task 7: Add a getter to the Person Class to return the full name. cerate an instance and log full name using the getter
// Task 8: Add a setter to the Person Class to update the name properties . Update the name using setter and log the updated full name
class Person{
    firstname="rahul";
    lastname="Sharma"
    age=39;
    greet(){
        console.log("Hello!");
    }
    updateAge(){
        this.age=29;
        this.undeclaredProperty=90;
        console.log(this.age);
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    set FN(firstname){
        this.firstname=firstname
    }
}
const rahul=new Person();
console.log(rahul.fullName)
rahul.FN='Rahul'
rahul.updateAge();
console.log(rahul.undeclaredProperty);
console.log(rahul.fullName)