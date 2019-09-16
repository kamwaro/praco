// OBJECT LITERAL
const book1 = {
    title:'Think And Grow Rich',
    author:'Napoleon Hill',
    year: 1950,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

const book2 = {
    title:'The Master Key To Riches',
    author:'Charles Hannel',
    year: 1950,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}



console.log(book1.title);
console.log(book1);
console.log(Object.keys(book1));
console.log(Object.values(book2));
console.log(book2.getSummary());