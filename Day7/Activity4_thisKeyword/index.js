//add a method to the book that returns the string with the book's title and author and log the result of calling this method
const bookInfo={
    title:"And The Mountains Echoed",
    author:"Abdullah",
    year:1943,
    info:function(){
        return `Title : ${this.title}\tyear : ${this.year}`;
    }
}
console.log(bookInfo.info());
