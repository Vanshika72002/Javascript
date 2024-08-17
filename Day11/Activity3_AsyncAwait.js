const promise=new Promise(function(resolve,reject){
    console.log("promise resolves next")
    resolve("Promise resolved!!");
    console.log("hello ");
})
async function handlePromise(){
    console.log("function called");
    const p=await promise;
    const p2=await promise;
    console.log("help");
    console.log(p);
}
handlePromise();
// promise resolves next
// hello 
// function called
// help
// Promise resolved!!