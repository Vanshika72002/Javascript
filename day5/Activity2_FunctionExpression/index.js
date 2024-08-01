const max=function(num1,num2){
    if(num1>num2)
        console.log(`maximum between ${num1} and ${num2} is ${num1}`);
    else 
        console.log(`maximum between ${num1} and ${num2} is ${num2}`);
}
max(2,3);
max(49,73);
max(9011,9088919);

const concat=function(str1,str2){
    return str1 + " " +str2;
}
let concatenated=concat("please","come now")
console.log(concatenated);