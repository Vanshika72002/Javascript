try{
    console.log("inside try block")
}catch{
    console.log("inside catch block")

}finally{
    console.log("inside finally block")

}
// inside try block
// inside finally block
try{
    console.log("inside try block:throwing error");
    throw("error inside try block")
}catch(err){
    console.log("inside catch block.Error: ",err)

}finally{
    console.log("inside finally block")

}
// inside try block:throwing error
// inside catch block.Error:  error inside try block
// inside finally block