
console.log("\nObject:");
const objectToIterate={
    title:"And The Mountains Echoed",
    author:"Abdullah",
    year:1943,
}
for(let i in objectToIterate){
    console.log(`${i} : ${objectToIterate[i]}`);
}
//object keys
console.log('\nkeys :')
for(let i of Object.keys(objectToIterate)){
    console.log(i);
}
//object values
console.log('\nvalues :')
for(let i of Object.values(objectToIterate)){
    console.log(i);
}