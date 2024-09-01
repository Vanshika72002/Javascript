//TAsk1:Write a function that returns another function , where the inner function accesses a variable from outer function's scope.Call the inner function and log the result
console.log("--------------------------Task1------------------------------------");

function outer(){
    let abc=890;
    function inner(){
        console.log(abc);
    }
    return inner;
}
let innerFunc=outer();
innerFunc();
// Task 2:Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter
function main(){
    let pvtcount=0;
    function increment(){
        pvtcount+=1;
    }
    function getCount(){
        return pvtcount;
    }
    return {increment,getCount};
}
console.log("--------------------------Task2------------------------------------");

//Ways to call the functions defined in function and returned from function
main().increment();     
const count=main().getCount();      //0 because the increment function was called on different instance and getCount() is cllaed on different instance
console.log(count);

const instance1=main();
instance1.increment();
const count1=instance1.getCount();  //1
console.log(count1);

const {increment,getCount}=main();
increment();
const count2=getCount();
console.log(count2);