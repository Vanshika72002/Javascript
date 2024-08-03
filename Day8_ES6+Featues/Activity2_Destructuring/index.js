//use array destructuring to extract the forst and last elemenst from an array of number and log them to console 
const array=[1,2,3,4];
let[a,b]=array;
console.log(a);
console.log(b);

const bookObj={
    title:"And the mountains echoed",
    characters:["Abdullah","Pari","Parwana","Saboor","Nila","Nabi","Markos"],
    author:"Khaled Hosseini",
    pages:466   
}
const {title,author}=bookObj;
console.log(`The author of the book "${title}" is ${author}`);   //undefined 466
const {Title,pages}=bookObj;
// console.log(Title,pages); //undefined 466
