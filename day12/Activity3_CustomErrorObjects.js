class DivideError extends Error{
    constructor(message){
        super(message);
    }
}
class validateInputError extends Error{
    constructor(message){
        super(message)
    }
}
function divide_a_by_b(a,b){
    if(b==0)
        throw new DivideError("Divide by zero Error");
    else
        return a/b;
}
try{
    console.log(divide_a_by_b(7,0));
}catch(e){
    console.error(e.name,e.message);
}

function checkInput(input){
    if(input=="")
        throw new validateInputError("invalid input");
    else    
        return "input accepted";
}
// checkInput("");no code will be executed after this line
try{
    console.log(checkInput(""));
}catch(e){
    console.log(e)
}
try{
    console.log(checkInput("hello"));
}catch(e){
    console.log(e)
}