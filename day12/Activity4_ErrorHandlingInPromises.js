const pr=new Promise((resolve,reject)=>{
    const randomNum=Math.random().toPrecision(1)*10;
    if(randomNum%2==0)
        resolve(randomNum);
    else
        reject("random number generated is odd");
})
pr.then(function(message){console.log("number generated: ",message)}).catch((err)=>console.log(err));

async function settlePromise(){
    try{
        const result=await pr;
        console.log("successfully received result : ",result);
    }catch(err){
        console.log("error is: ",err);
    }
}
settlePromise();

// error is:  random number generated is odd
// random number generated is odd

//OR

//number generated:  10
// successfully received result :  10