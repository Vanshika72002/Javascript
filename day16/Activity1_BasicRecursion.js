//Task 1:Write a recursive function to calculate the factorial of a number.Log the results for few test cases

function CalcFact(x){
    // let fact=1;
    if(x==1){
        return 1;
    }
    x=x*CalcFact(x-1);
    return x;
}
console.log(CalcFact(5))
console.log(CalcFact(10))
console.log(CalcFact(15))
console.log(CalcFact(20))


//Task 2:Write a recursive function to calculate the nth fibonacci number.Log the results for few test cases

function fib(n){
    if(n==1)
        return 0;
    else if(n==2)
        return 1;
    let result=fib(n-1)+fib(n-2);
    return result;
}
console.log(fib(1));
console.log(fib(5));
console.log(fib(9));
console.log(fib(14));
console.log(fib(18));

//Following take a very long time in calculation
// console.log(fib(42));
// console.log(fib(43));
// console.log(fib(44));
// console.log(fib(45));
// console.log(fib(46));
// console.log(fib(47));
// console.log(fib(48));
// console.log(fib(49));