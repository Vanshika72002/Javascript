const a=9;
const b=12;
const c=3;
console.log("a =",a,"b =",b,"c =",c);
let largest;
if(a>b){
    if(a>c){
        largest=a;

    }
}
// b>=a

else if(b>c){
    largest=b;
}

else
    largest = c;
console.log(largest);

const num4=prompt();
const num5=prompt();
const num6=prompt();
console.log("a =",num4,"b =",num5,"c =",num6);
if(num4>num5){
    if(num4>num6){
        largest=num4;

    }
}
// num5>=num4

else if(num5>num6){
    largest=num5;
}

else{
    //this will be executed irrespective of the values entered by the user
    console.log("else executing...")
    largest = num6;
}console.log(largest);

//👇need to convert to number data tyoe beacuse prompt returns string
const num1=Number(prompt());
const num2=Number(prompt());
const num3=Number(prompt());
console.log("a =",num1,"b =",num2,"c =",num3);
let largestNum;
if(num1>num2){
    if(num1>num3){
        largest=num1;

    }
}
// num2>=num1

else if(num2>num3){
    largest=num2;
}

else
    largest = num3;
console.log(largest);