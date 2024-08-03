//Use enhanced object literals to create an object with methods and properties , and log the object to the console.
const obj={
    returnObj:function(){
        return this;
    },
    age:30,
    name:"Ruhanika"
}

console.log(obj);
//calling the method
console.log(obj.returnObj());
//create an object with computed property names based on variables and log the object to the console
const prop1="name";
const prop2="gender";
const prop3="age";

const obj1={

    [prop1]:"Vanshika",
    [prop2]:"Female",
    [prop3]:22,

}
console.log(obj1)

const val1="Vanshika"
const val2="Female"
const val3=22;

const obj4={

    [prop1]:{val1},
    [prop2]:val2,
    [prop3]:[val3],

}


console.log(obj4)
// const Vanshika=9;

// const obj={
//     prop1:Vanshika,
//     "prop2":"vanshika",
//     [prop1]:"Vanshika"
// }
// console.log(obj)


// const obj3={
//     prop1:Vanshika,
//     prop1:"Vanshika",
//     prop1:"vanshika",
   
// }
// console.log(obj3)
