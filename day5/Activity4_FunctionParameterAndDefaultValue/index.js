function product(num1,num2){
    return num1*num2;
}
console.log(product(14,78));
const productWithDefValue=(num1,num2=10)=>num1*num2;


console.log(productWithDefValue(1232));
 
function WelcomeMessage(name,age=22){
    return `Hello! Welcome ${name} .`;
}

console.log(WelcomeMessage('Vanshika'));