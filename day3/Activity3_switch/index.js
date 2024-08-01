let num=5;
switch(num){
    case 1:console.log("Monday");
            break;
    case 2:console.log("Tuesday");
            break;
    case 3:console.log("Wednesday");
            break;
    case 4:console.log("Thursday");
            break;
    case 5:console.log("Friday");
            break;
    case 6:console.log("Saturday");
            break;  
    case 7:console.log("Sunday");
            break;
    default:console.log("Enter a valid number(1-7)");
    
}


let marks=45;
let grade;
// if(marks!=null && marks>=0 && marks<=100){
//     if(marks>=90&&marks<=100)
//         grade='A';
//     else if(marks>=70&&marks<=89)
//         grade='B'
//     else if(marks>=60&&marks<=69)
//         grade='C'
//     else if(marks>=50&&marks<=59)
//         grade='D'
//     else
//         grade='E'
// }
// else{
//     alert("enter valid marks");
// }
console.log(marks>=90&&marks<=100);
switch(true){
    case (marks>=90&&marks<=100): grade='A';
                            break;
    case (marks>=70&&marks<=89): grade='B';
                            break;
    case(marks>=60&&marks<=69):grade='C'
                            break;
    case(marks>=50&&marks<=59):grade='D';
                                break;
    case(marks>=0&&marks<=49):grade='E'
                                break;
    default: console.log("Enter valid marks");
}
console.log(grade);