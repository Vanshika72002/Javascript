
// let num=prompt("Enter a number");
//👇if user doesnt enter anyting and click 'OK'


// console.log(typeof num)  //string    //because empty string is returned

// console.log(""==num);   //true       

// console.log(""===num);   //true      

//console.log(num==0);      //true

//console.log(num===0);      //false

let num=prompt("Enter a number");
//if user enters 0 and clicks 'OK' then also the code within below if statement won't run 
//because === compares type also and the return of prompt() is a string
// if(num===0){
    
//     console.log('number is zero');
// }else if(num>0)
//     console.log('number is positive');
// else    
//     console.log('number is negative');

if(num==0){
    console.log('number is zero');
}else if(num>0)
    console.log('number is positive');
else  if(num<0)  
    console.log('number is negative');
else if(num==null)
    console.log("you didnt click on ok")

//Eligibility To Vote

const age=prompt();
if(age>=18)
    console.log("Eligible to vote");
else
    console.log("not eligible");

