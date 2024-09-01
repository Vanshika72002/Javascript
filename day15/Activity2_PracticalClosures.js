// write a function that generates uniques IDs. Use a closure to keep track of the last genrated ID and increment it with each call
console.log("--------------------------Task3------------------------------------");

function close(){
    let last_id=0;
    return function generateId(){
        console.log(last_id);
        last_id++;
    }
}
let close0=close();
close0();
close0();
close()();
console.log("--------------------------Task4------------------------------------");
//Create a closure that captures a user'name and returns a function that greets the user by name
function Name(name){
    function greet(){
        console.log(`Hello ${name}`);
    }
    return greet;
}
const Rohanpreet=Name("Rohanpreet");
Rohanpreet();   //not Rohanpreet.greet();
//if return {greet} then RohanPreet.greet();