// Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    
    this.getSummary = function(){
        return `The book ${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

// Instantiate an Object
let  book1 = new Book ("The Bible","God",'1956');
// console.log(book1 = new Book("The Bible","God",'1956'));
console.log(book1)
console.log(book1.getSummary());