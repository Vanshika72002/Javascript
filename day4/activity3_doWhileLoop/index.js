num=1;
do{
    console.log(num);
    num++;
}while(num<6);

console.log("Task 2.To print factorial of a number using do  while loop")

let x=5;
// let fact;       
// console.log(fact);      //undefined
let fact=1;
do{
    fact*=x;
    x--;
}while(x>=1);
console.log(fact);