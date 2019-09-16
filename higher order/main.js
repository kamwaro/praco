const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start:1992, end: 2008},
    {name: "Company Three", category: "Retail", start:1999, end: 2008},
    {name: "Company Four", category: "Retail", start:1989, end: 2010},
    {name: "Company Five", category: "Retail", start:2009, end: 2014},
    {name: "Company Six", category: "Retail", start:1987, end: 2010},
    {name: "Company Seven", category: "Retail", start:1986, end: 1996},
    {name: "Company Eight", category: "Retail", start:2011, end: 2016},
    {name: "Company Nine", category: "Retail", start:1981, end: 1989}
    
];

const ages = [33, 12, 28, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for(let i = 0; i < companies.length; i++) {
 //   console.log(companies[i]);
//}

// forEach
//companies.forEach(function(company) {
//    console.log(companies[i]);

//}


// filter

/*let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages)
    }
}*/

//const canDrink = ages.filter(function(age) {
 //   if(age >= 21) {
 //       return true;
//    }
//});
// map
// sort
// reduce


/*var data = {
    name:'john',
    age:28,
    maritalStatus:true
}

for (var elem in data){
    console.log(elem, data[elem]);
}*/

/*var sum = 0; //store all the addition of numbers // final value

var num = 0;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(sum);*/

/*
var randomStuff = ['apple', 3.2414, 9999, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastObject' ];
var x = 0;

 while (x < randomStuff.length){
     console.log(randomStuff[x]);
     x++;
 }
 
 */


 /*
 function catGreeter() {
 console.log('HELLLLLO!!');
 }

 catGreeter();*/

/* function mercy(faith, debbie){
     console.log(faith + debbie);
 }

 mercy(78,100);*/

 // if statements
 //equality operators and  assignment operators
 //logical operators

 /*****************************************/

 //first example
/**
 var num = prompt('Enter a number');

 if (num > 0) {
     alert('The number is positive')
 } else if (num < 0){
     alert('The number is negative')
 } else {
     alert('The number is a zero')
 }
 **/

 /** var isRaining = prompt('Is it raining?');

 if (isRaining === 'yes'){
    alert('Go take an umbrella!')
 } else {
     alert("It's ok .You dont need anything")
 }; 
 **/

 //two equal signs or three equal signs are for comparison or equality checking
 //one equal sign is for assigning values to a variable

 /*****/

 // && (and), || (or), ! (not)

 /*
 true && true == true
 true && false == false
 false && true == false
 false && false == false

 true || true == true
 true || false == true
 false || true == true
 fasle || false == false

 !true == false
 !false == true
  */
 
  var name = 'lexi';
  var age = 17;
  var highSchool = true;

  // JOB at APPLE
  //job requirements : over 18 and high school degree

  if (age >= 18 && highSchool === true) {
      alert("You are applicable to apply for this job.")
  }