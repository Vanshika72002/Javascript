//write a recursive function to perform binary search on sorted array
function search(arr,key,low,high){
    let mid=Math.floor((low+high)/2);
    // console.log(mid);
    if(low>high)
        return -1;
    if(arr[mid]==key)
        return mid;
    if(arr[mid]>key)
        high--;
    else
        low++;
    return search(arr,key,low,high);
}
console.log(search([1,2,3,4],3,0,4));   //2
console.log(search([1,2,13,4],3,0,4));  //-1
console.log(search([1,2,3,41],41,0,4)); //3


//write a recursive function to count the number of occurences of an element in the array
console.log("--------");
function occurences(arr,el,cnt,i){
    if(i==arr.length)
        return cnt;
    if(arr[i]==el)
        cnt++;
    return occurences(arr,el,cnt,i+1);
}   
let count=occurences([4,4,4,4],4,0,0);  //4
console.log(count);
count=occurences([4,8,12,16],4,0,0);    //1
console.log(count);
count=occurences([0,-1,-2,-1],-1,0,0);      //2
console.log(count);
count=occurences([14,14,49,14,0,1],14,0,0);      //3
console.log(count);