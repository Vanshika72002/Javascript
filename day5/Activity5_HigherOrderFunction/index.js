//Higher Order Function that takes a function and a number and calls the function that many times

function callFunction(func,num){
    for(let i=0;i<num;i++){
        func();
    }
}
const greet=()=>{console.log("Greetings!!")};
callFunction(greet,5)

//Higher Order Function that takes two functions and a value , applies he first function to the value and then applies the second function to the result
const cube=(num)=>num**3;
const square=(num)=>num**2;

function squareOfCube(func1,func2,val){
    const result=func1(val);
    return func2(result);
}
console.log(squareOfCube(square,cube,3));