/************** TOPICS COVERED  ******************/
/*  1. Variables and data types
    2. Arrays
    3. Object Literals
    4. Methods for strings,arrays,objects etc
    5. Loops - for, while, for...of, for Each, map
    6. Conditionals (if, else, ternary & switch)
    7. Functions(normal & arrow)
    8. OOP (prototypes & classes)
    9. DOM Selection
    10. DOM manipulation
    11. Events
    12. Basic Form Validation 
*/


// ***********   VARIABLES  ***************
// var, let, const
// var => has a global scope
// let and const => have a block-level scope
// let => you can reassign values
// const => always use const unless you know you are going     to reassign the variable e.g in a score for a game

//  Examples
//  let age = 30;
//  const age = 31;





// *********     DATA TYPES      *******************
// String, Numbers, Boolean, null, undefined, symbols

// STRING
// Example
// const name = 'John';
// Concatenation--- method 1
// console.log('My name is ' + name + ' and I am ' + age);

// Concatenation---method 2 (Template Literals)
// console.log(`My name is ${name} and I am ${age}`)

// String Methods and Properties
// N/B: A property does not have a parenthesis
//      A method is a function associated with an object

//  String Properties
//  const s = 'Hello World';
//  console.log(s.length);************Gets the length

// String methods
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toupperCase());***Chaining methods

// const m = 'technology, computers, it, code';
// console.log(m.split(', '))****wil result into an array



// NUMBER
// const age = 30;
// const rating = 4.5;

// Boolean
// const isCool = true;

// null
// const x = null;


// undefined
// const y = undefined;




// ************** ARRAYs **********
// Arrays are variables that hold multiple values

// How to create an array
// 1. Using a constructor
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers); 



// 2. Using brackets
// const fruits = ['apples', 'oranges', 'pears', 10, true];

//***** */ How to access values in arrays \  ******
// ######### USE INDEX NOTATION IN BRACKETS
// Example
// ####Toget oranges
// console.log(fruits[1]);




// **** */ How to add values in arrays \  ******
// 1. Using next index notation in the array

// Example
// fruits[3] = 'grapes';
// console.log(fruits);

// 2. Using the push method

// Example
// fruits.push('mangos'); ****Pushes a value to the end of      the array

// 3. Using the unshift method

//  Example
// fruits.unshift('strawberries'); ****Pushes a value to       the front of the array



// **** */ How to remove values in arrays \  *****
// 1. Using the pop method

//  Example
//  fruits.pop(); *****Removes the last value in the array




// *** */ How to check if a variable is an array \ *****

// 1. Pass in the variable into Array.isArray()

// Example
// console.log(Array.isArray(fruits)); .*** It returns true/false

// *** */ How to get the index of a certain value \**

//  1. Use the indexOf Method
// Example
// console.log(fruits.indexOf('oranges'));



// *************    OBJECT LITERALS    ******************
// They are key-value pairs
// Example


 /* const person = {
 firstName: 'John',
 lastName: 'Doe',
 age: 30,
 hobbies:['music', 'movies', 'sports'],
 address: {
     street: '50 main st',
     city: 'Boston',
     state: 'MA'
 }
 *\



// ***  How to access a single value in an OBJECT  *\ *****

// 1. Use the dot syntax
// Example
// console.log(person.firstName)





// ***  How to access a multiple values in an OBJECT  *\ *****
// 1. Use the dot syntax multiple times
// Example
// console.log(person.firstName, person.lastName);





 /***  How to access a single value OF an ARRAY  in an OBJECT  *\****

//  1. Use dot syntax to access the name of the array, then use bracket notation as usual in arrays

// Example -- To access movies in person.hobbies
// console.log(person.hobbies[1]);



// ***  How to access a single value of an OBJECT in an OBJECT  *\ *****

// 1. Use dot syntax to access the name of the object, then another dot syntax to access the value in the object

// Example -- To access city in address
// console.log(person.address.city);



//  ****** How to use DECONSTRUCTORS  to pull out variables from an OBJECT *****/


//  Example -- pulling out firstName, lastName and city

//  const { firstName, lastName, address: { city } } = person;

// console.log(firstName);
// console.log(city);



// ****** How to add PROPERTIES to an OBJECT *******//
// 1. Use dot syntax to add the name of the property, then use single equals sign to add the value of the property

// Example -- Adding email property to person object
// person.email = 'john@gmail.com';

// console.log(person); /***  Results in object below **/

/* const person = {
 firstName: 'John',
 lastName: 'Doe',
 age: 30,
 hobbies:['music', 'movies', 'sports'],
 address: {
     street: '50 main st',
     city: 'Boston',
     state: 'MA'
           },
 email: 'john@gmail.com'          
 }
 *\

// N/B:  IN MOST CASES YOU WILL BE DEALING WITH ARRAYS OF OBJECTS

// EXAMPLE -- CREATING AN ARRAY OF TO-DOS CONTAINING OBJECTS
// const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss'
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);


// ***           LOOPS             *\ *****/

//1. For loop
// Example

/* for(let i = 0; i < 10; i++) {
   console.log(`For loop number: ${i}`);
 }
*/

//2. While loop
// Example

/* let i = 0;
 while(i < 10) {
     console.log(`While Loop Number: ${i}`);
     i++;
}
*/



// ****** HOW to LOOP through ARRAYS *******//
//  1. Using a For Loop  **** Not Recommended
// Example
/* 
   for(let i = 0; i < todos.length; i++) {
       console.log(todos[i].text);
   }

*/

//  2. Using a For-Of Loop  ****  Recommended
// Example
/*

for(let todo of todos) {
    console.log(todo.text);
}

*/

// 3. forEach, map, filter  [ High Order Array Methods ] **** Most Recommended for iteration through Arrays

// forEach -- Just Loops through Arrays
// map -- Creates a new array from an array
// filter -- Creates a new array from an array, based on a condition

// High Order Array methods take in a function as a parameter



/**********             forEach             */
// Example
/*
 todos.forEach(function(todo)) {
     console.log(todo.text)
 }

*/


/*******                map                  */
// Example
/*

const todoText = todos.map(function(todo)  {
    return todo.text;
});

 console.log(todoText);      ****** Returns an array of texts in the objects

*/




/*******                filter                  */
// Example
/*

const todoCompleted = todos.filter(function(todo)  {
    return todo.isCompleted === true;
});

 console.log(todoCompleted);     ***** Returns an array of objects where isCompleted value is true
 
*/





/*********         C O N D I T I O N A L S    ***********/
/* 1. if statements */

// Example 1
/*   const x = 10;
     if(x == 10) {
         console.log('x is 10');  ** Returns in log
     }
*/

// Example 2
/*   const x = '10';
     if(x === 10) {
         console.log('x is 10'); **** Doesnt return in log
     }
*/ 

//      N/B: Triple equals === matches also the data types



/* 2. else statements */    // For two conditions

// Example 1
/*   const x = 10;
     if(x == 10) {
         console.log('x is 10');  ** Returns in log
     } else {
         console.log('x is NOT 10');
     }
*/

/* 3. else if statements */    // For multiple conditions

// Example 1
/*   const x = 10;
     if(x == 10) {
         console.log('x is 10');  ** Returns in log
     } else if( x > 10) {
         console.log('x is greater than 10');
     } else {
         console.log('x is less than 10');
     }
*/

/* 4. if statements */    // For multiple conditions

// Example 1
/*   const x = 10;
     const y = 10;


     if(x > 5  || y > 10) {
         console.log('x is more than 5 or y is more than 10 '); 

     }
     
*/

// Example 2
/*   const x = 6;
     const y = 11;


     if(x > 5  && y > 10) {
         console.log('x is more than 5 and y is more than 10 '); 

     }
     
*/

/* 5. ternery operator */
// Its a short-hand if statement
// Used a lot to assign variables based on a condition

// Example:
/*
const x = 10;

const color = x > 10 ? 'red'  : 'blue';

//  ? represents then   (ternary operator)
//  : represents else

Statement reads:   if x is greater than 10 then assign the value red to the variable color, else assign the color blue

*/

/* 5. switch */
// It's another way to evaluate a condition 

// Example
// const x = 11;
// const color = x > 10 ? 'red' : 'blue';

// Using switch to evaluate what the colour is...

// switch(color) {
//     case 'red':
//         console.log('color is blue');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;

// }



// **********           FUNCTIONS       ***********\ *****/


//1.NORMAL FUNCTION
// Example 1
// function addNums(num1, num2) {
//     return num1 + num2;
// } 

// console.log(addNums(4,5));

//  Example 2 -- Function with default values
//  function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;
// } 

// console.log(addNums());

// 2.Arrow Functions
// Introduced in ES6
// Cleans things up
// Instead of using the keyword function...you name it as a variable using const, equate the variable to the parameters, after the parameters you use the fat arrow
// Have advantages with the this keyword....they have a lexical this
// great to use with the forEach higher order function

// Example 1.......MOST BASIC
// const addNums = (num1 = 1, num2 = 1) => {
//     console.log(num1 + num2);
// }

// Example 2.....without curly braces
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
//   


// Example 3.....function with return keyword...you dont have to include the return keyword
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums());

// Example 4.....function with only one parameter....you dont have to include brackets in the parameters
// const addNums = num1 => num1 + 5;
// console.log(6);

// Example 5....using with forEach function to loop through an array
// todos.forEach((todo) => console.log(todo));









/*********         Object  Oriented   Programming ( O O P)   ***********/
// 1. Object Literals ####(Covered above)
// 2. Constructing Objects
 
// ############    2.Constructing Objects  ###########
// Method one: Using a  Constructor Function Prototype
// Example     --   Creating a Person Object

// N/B: The name of the constructor function should always start with a capital letter
//      The properties of the object are passed in as parameters of the function
//      The attributes passed in are set as the properties of the object using the 'this' keyword

// Constructor Function

// function Person(firstName, lastName, dob) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.dob = dob;
//  }   

// Instantiating an object
// N/B: Create a variable and set it to the constructor function 
// Example -- 
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');


// SIDE NOTE --- Using a date constructor ---

// function Person(firstName, lastName, dob) {
    //  this.firstName = firstName;
    //  this.lastName = lastName;
    //  this.dob = new Date(dob);     ## Returns a well formated date 
    //  }   

// console.log(person2.dob);     

// Methods you can run on a date object:
// 1. .getFullYear()      .....e.g console.log(person2.dob.getFullYear);
// 

// How to include functions in an object 
// 1.) Using a constructor function

// Example

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }

//     this.getFullName = function() {
//       return  `${this.firstName} ${this.lastName}`
//  }
//  };

// 2.) Attaching methods to the prototype
// It's recommended to use this way, because we might not always use the functions 
// The functions are outside of the object instance
// They are attached to the object using the prototype keyword
// It's syntactic sugar -- compared to example 1 above

// Example

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//  }
// 
//   Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
//  
//   Person.prototype.getFullName = function() {
//     return `{$this.firstName} {this.lastName}`;
// }
 

/********* C L A S S E S *************/

// Its syntactic sugar
// It's the simplest way to construct objects
// They are more organized

// class Person {
//     constructor (firstName, lastName, dob)  {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }




    
