//Write a recursion function to reverse a string
let str="hi this is aman gupta,CEO of boat";
function reverseString(str,newStr,i){
    let N=str.length;
    if(i<=0 || newStr.length===str.length)
        return newStr;
    newStr+=str[i-1];
    newStr=reverseString(str,newStr,i-1);
    return newStr;
}
let empty="";
let newstr=reverseString(str,empty,str.length);
console.log(newstr);

//Write a recursive function to check if the string is a palindrome
str="hih";
function isPalindrome(str,i){
    let N=str.length;
    if(i>=Math.floor(N/2))
        return true;
    if(str[i]==str[N-i-1]){
        return isPalindrome(str,i+1);
    }
    else
        return false;

}

console.log(isPalindrome('madam',0));
console.log(isPalindrome('hi',0));
console.log(isPalindrome('palindrome',0));
console.log(isPalindrome('naman',0));

