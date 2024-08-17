const promise1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("promise resolved successfully"),5000);
    console.log("inside promise");
})
promise1.then(function(message){
    console.log(message);
})
const promise2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("promise rejected"),2000);
    console.log("inside promise");
})
promise2.then((res)=>console.log(res)).catch((error)=>console.log(error));
console.log("message after promise")
// inside promise
// inside promise       
// message after promise
// promise rejected
// promise resolved successfully