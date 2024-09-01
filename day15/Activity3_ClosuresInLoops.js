// Write a loop that creates an array of functions. Each function should log its index when called.Use Closure to ensure teach function logs the correct index.
console.log("--------------------------Task5------------------------------------");

function outer(){
    let array_of_functions=[];
    for(let i=0;i<5;i++){
        array_of_functions.push(function(){
            console.log(i);
        })
    }
    return array_of_functions;
}
let Outer=outer();
let func1=Outer[0];
func1();
let func2=Outer[1];
func2();
let func3=Outer[2];
func3();
let func4=Outer[3];
func4();
