//write a function that takes two parameters and returns their product , with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter
const product=(param1,param2=10)=>{
    return param1*param2;
}
console.log(product(12,12));
console.log(product(12));