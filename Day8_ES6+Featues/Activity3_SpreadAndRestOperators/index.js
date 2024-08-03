// Task 1 :-Use the spread operator to create a new array that includes all elements from an existing array plus additional elements, and log the new array to console
let array=[12,34,56,78,90];
let newArray=[...array,21 ,43, 65];
console.log(newArray);

//use the rest operator in a function to accept arbitrary number of arguments , sum them and return the result
function SumUp(...elements){
    let sum=0;
    for(let i of elements){
        sum+=i;
    }
    return sum;
}
// SumUp([1,2,3,4,5])   //single element
console.log(SumUp(1,2,3,4,5));