 fetch("Some-random-url").then(result=>console.log(result)).catch(err=>console.log(err.name+":"+err.message));


 
async function fetchData(){
    try{
        await fetch("Some-random-url")
    }catch(err){
        console.log("error",err.name,err.message);
    }
   
}
fetchData();