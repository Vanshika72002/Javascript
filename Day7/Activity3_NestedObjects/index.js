const library={
    name:'virendra academy',
    books:[
        {
            title:"OOPS",
            publishedIn:1990
        },{
            title:"DBMS",
            publishedIn:1980
            
        },{
            title:"CN",
            publishedIn:1997
        },{
            title:"OS",
            publishedIn:2000
        }
    ]
}
console.log(library);
//Name of the library
console.log(`Name of the library : ${library.name}`)
//Titles of the books
console.log('Title of the books')
for(let i of library.books){
    console.log(i["title"]);
}