const sum=(operand1,operand2)=>operand1+operand2;

const s=sum(2,3);
console.log("sum = ",s);

const checkInString=(str,ch)=>{
    for(i of str){
        console.log(i);
        if(i==ch){
            return true;
        }
    }
    return false;
    

}
// checkInString(4524567,2);   //str is not iterable
checkInString("Alphabet is a set of 26 letters",2);