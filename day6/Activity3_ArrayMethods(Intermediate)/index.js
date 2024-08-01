const array=[12,43,56,78,90];
let double=array.map(function(el){
    console.log(el);
    return el*2;
})
console.log(double);

let even=array.filter(function(el){
    return el%2==0;
})
console.log(even);

let x=0;
let result=array.reduce(function(sum,el){
     return sum+el;
})

console.log(result);

let max=array.reduce(function(acc,el){
    if(acc>el)
    return acc;
    return el;

})

console.log(max);