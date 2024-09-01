//Write a function that memoizes the result of another function. Use a closure to store the result of previous computations.
console.log("--------------------------Task7------------------------------------");

function Memoize(){
    let previousResults={};
    function power10(x){
        // console.log(Object.keys(previousResults));
        if(Object.keys(previousResults).indexOf(String(x))>-1){
            // console.log("result is available");
            return previousResults[x];
        }
        else{
            // console.log("result unavailable");
            previousResults[x]=x**10;
        }
        return x**10;
    }
    return power10;
}
console.time();
let power10=Memoize();
console.timeEnd();

console.time();
console.log(power10(20));
console.timeEnd();
console.time();
console.log(power10(20));
console.timeEnd();


console.log("--------------------------Task8------------------------------------");


//Create a memoized version of a function that calculates the factorial of number
function returnFunctionToCalcFactorial(){
    let calculatedFactorials={};
    return function(x){
        if(x in calculatedFactorials){
            console.log("result available");
            return calculatedFactorials[x];
        }else{
            let fact=1;
            for(let i=2;i<=x;i++){
                fact*=i;
            }
            calculatedFactorials[x]=fact;
            return fact;
        }
    }
}
let calcFact=returnFunctionToCalcFactorial();

console.log(calcFact(15));
console.log(calcFact(15));
