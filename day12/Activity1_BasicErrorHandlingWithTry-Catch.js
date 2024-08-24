function throwError(){
    throw "custom error thrown without any reason"
}
try{
    throwError();
}catch(err){
    console.log("got the error: ",err);
}
function Divide(numerator,denominator){
    if(denominator==0)
        throw "DivideByZero Error";
    return numerator/denominator;
}
try{
    let result=Divide(10,2);
    console.log("result: ",result);
}catch(err){
    console.log("got the error: ",err);
}
try{
    let result=Divide(10,0);
    console.log("result: ",result);
}catch(err){
    console.log("got the error: ",err);
}
