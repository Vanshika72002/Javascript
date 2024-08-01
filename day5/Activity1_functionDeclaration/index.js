function EvenOrOdd(x){
    if(x%2==0)
        console.log(`${x} is even`);
    else    
        console.log(`${x} is odd`);

}
EvenOrOdd(1);
EvenOrOdd(10);
EvenOrOdd(11);
EvenOrOdd(14);
EvenOrOdd(17);
EvenOrOdd(20);

function square(num){
    return num*num;
}
// const square=square(7); //identifier square has already been declared
const sq=square(7)
console.log(sq);
