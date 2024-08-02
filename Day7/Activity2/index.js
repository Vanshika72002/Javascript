//add a method to the book that returns the string with the book's title and author and log the result of calling this method
const bookInfo={
    title:"And The Mountains Echoed",
    author:"Abdullah",
    year:1943,
    info:function(){
        return `Title : ${bookInfo.title}\nAuthor : ${bookInfo.author}`;
    },
    updateYear:function(newYear){
        bookInfo.year=newYear;
    }
}
console.log("book info:")
console.log(bookInfo);
console.log(bookInfo.info());
bookInfo.updateYear(1944);
console.log(bookInfo);

//making the functions non enumerable
Object.defineProperty(bookInfo,"info",{
    enumerable:false
})
Object.defineProperty(bookInfo,"updateYear",{
    enumerable:false
})
console.log(bookInfo);
