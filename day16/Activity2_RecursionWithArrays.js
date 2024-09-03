// ✔
// function sumByRecursion(arr,n,sum){
//     if(n==-1)
//         return 0;
//     else{
//         sum+=sumByRecursion(arr,n-1,arr[n-1]);
//         console.log(sum);
//         return sum;
//     }
// }   

function sumByRecursion(arr,n,sum){
    if(n==0){
        
        return sum;
    }
    else{
        sum+=arr[n-1];
        sum=sumByRecursion(arr,n-1,sum);
        return sum;
    }
}
let arr=[0,1,2,3,4]
let result=sumByRecursion(arr,5,0);
console.log(result);
arr=[10,11,12,13,34,0,14,26,39,40]
result=sumByRecursion(arr,10,0);
console.log(result);
arr=[19,24,23,46]
result=sumByRecursion(arr,4,0);
console.log(result);
arr=[49,87,90,34,23]
result=sumByRecursion(arr,5,0);
console.log(result);


//TASK 4:Maximum element in array using recursion

function Max(arr,N,max){
    if(N==1){       //a single number is itself the maximum(or the greatest) one
        return arr[0];
    }
    max=Max(arr,N-1,max);   //basically this will return the maximum element from the N-1 elements 
    if(max<arr[N-1]){       //now we will compare the maximum of N-1 elements with the a[N]
        max=arr[N-1];
    }
    return max;
}
console.log("maximum is:",Max([148,29,31,45,59],5,-1));
console.log("maximum is:",Max([14,149,31],3,-1));
console.log("maximum is:",Max([14,90,150,59],4,-1));
console.log("maximum is:",Max([151],1,-1));
console.log("maximum is:",Max([45,152],2,-1));