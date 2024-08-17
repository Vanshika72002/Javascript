const promise=new Promise((resolve,reject)=>{
    
    fetch('github-user-url').then((Response)=>{resolve(Response.json());return Response})
})
promise.then(function(res){
    console.log("user info: ", res)
    return res.avatar_url;
}).then(function(res){
    console.log("user avatar url: ",res)
})