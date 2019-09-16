// CHALLENGE 1: REVERSE A STRING
// RETURN a string in reverse
// ex. reverseString('hello') === 'olleh' 

// Solution One
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// Solution two

// function reverseString(str){
//     let final = '';
//     let strArr = str.split('');
//     for(let i = str.length-1; i>=0; i--){
//         final += strArr[i];
//     }
//     return final;
// }
// console.log(reverseString("hello"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str){
//     var reg = /[\W_]/g;
//     var smallstr = str.toLowerCase().replace(reg,"");
//     var reversed =  smallstr.split('').reverse().join('');
//     if (smallstr === reversed) return true;

//     return false;
// }

// console.log(isPalindrome('racecar!'));

// // CHALLENGE 3: REVERSE AN INTERGER
// // Return an integer in reverse
// // ex. reverseInt(521) === 125

// function reverse(int) {


// // CHALLENGE 4: CAPITALIZE LETTERS

// ChallENGE 5: RETURN THE FACTORIAL
//  function factorialize(num) {
//     let solution = 1;
//     for(var i = 1; i<=num ; i++){
//         solution *= i
//     }
//     return solution;
// };

//  console.log(factorialize(5));

// CHALLENGE 6: REturn the length of the longest word

// function findLongestWord(str) {
//     var strArr = str.toLowerCase().split(' ');

//     let longestWord = '';
//     for(var str of strArr){
//         if(str.length > longestWord.length){
//             longestWord = str;
//         } 
//         }
//         return longestWord;
//     }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// Challenge 7: Title the first letter of every word in the sentence given
// Solution 1
// function titleCase(str) {
//  var words =  str.toLowerCase().split(' ');
//  console.log(words);
//  for(var i = 0; i<=words.length-1; i++){
//      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//  }
//  return words.join(' ');
// }

// Solution two
// function titleCase(str) {
//     let titled = str.toLowerCase().split(" ").map(function(elem){
//         return elem[0].toUpperCase() + elem.slice(1);
//     })
//     return titled.join(" ");

// }
// console.log(titleCase("I'm a little tea pot" ));

// CHALLENGE 8: RETURN LARGEST NUMBERS IN ARRAYS
// function largestOfFour(arr){
//     let maxes = [];
//     for (let i=0; i<arr.length; i++) {
        
//         let tempMax = arr[i][0];
//         for(let j=0; j<arr[i].length; j++){
//             let currentElement = arr[i][j];
//             if(currentElement >= tempMax){
//                 tempMax = currentElement;
//             }
//         }
//         maxes.push(tempMax);
//     }
//     return maxes;
// }

// console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));

// CHALLENGE 9: CONFIRM ENDS WITH
// Solution One

// function confirmEnding(str, target){
//     if(str.substr(-target.length) === target){
//         return true;
//     }
//         return false;
//     }
// console.log(confirmEnding("Peterson","son"));

// Solution Two

// function confirmEnding(str, target){
//     return str.slice(-target.length) === target;
// }

// console.log(confirmEnding("Peterson", "son"));

// Solution three

// function confirmEnding(str, target){
//     return str.substr(-target.length) === target;
// }

// console.log(confirmEnding("Peterson", "son"));

// CHALLENGE 10: REPEAT STRING NUM TIMES

// function repeatStringNumTimes(str,num){
//     let final = '';
//     if(num === 0){
//         return '';
//     }
//        for(var i = 0; i< num; i++){
//             final += str;
//        } 
//        return final;
//     }



// console.log(repeatStringNumTimes('money',5));


// CHALLENGE 11: TRUNCATE A STRING
// function truncateString(str,num){
//     let trunc = str.substr(0,num);
//     if(num <= 3){
//         trunc = trunc + '...';
//     } else {
//         trunc = trunc.substr(0,num-3) + '...';
//     }
//     return trunc;
// }
// console.log(truncateString("tommy goes to work.", 9))

// CHALLENGE 12: CHUNK-ARRAY-IN-GROUPS
// function chunkArrayInGroups(arr, size){
//     var chunk = [];
//   while(arr.length > 0){
//         chunk.push(arr.slice(0, size));
//         arr = arr.slice(size);
//     }
//     return chunk;
// }

// console.log(chunkArrayInGroups(['a','b','c','d'], 2));


// CHALLENGE 13: SLASHER
// function slasher(arr, howMany){
//     slash = arr.splice(0,howMany);
//     return arr;
// }
// console.log(slasher([1,2,3], 2));

// CHALLENGE 14: MUTATIONS
// Solution One

// function mutation(arr){
//     let firstWord = arr[0].toLowerCase().split('');
//     let secondWord = arr[1].toLowerCase().split('');
//     console.log(firstWord,secondWord);

//     for(var i=0; i<secondWord.length; i++){
//         if(firstWord.indexOf(secondWord[i]) === -1)return false;
//            }
//             return true;
//         }
// console.log(mutation(['hello', 'Hello']));

// Solution Two
// function mutation(arr){
//     let firstWord = arr[0].toLowerCase().split('');
//     let secondWord = arr[1].toLowerCase().split('');

//     for(let letter of secondWord){
//         if(firstWord.indexOf(letter) === -1)return false;
//     }
//     return true;
// }
// console.log(mutation(['HelLo','hello']));

// Solution Two
// function mutation(arr){
//     let firstWord = arr[0].toLowerCase().split('');
//     let secondWord = arr[1].toLowerCase().split('');

//     for(let letter of secondWord){
//         if(!firstWord.includes(letter))return false;
//         console.log(letter)
//     }
//     return true;
// }
// console.log(mutation(['hello','Hello']));

// Challenge 13: Falsy Bouncer
// Solution One
// function bouncer(arr){
//     return arr.filter(function(item){
//         return item
//     })

// }
// console.log(bouncer([6,"",'hello',NaN, undefined,'gyuss']))

// Solution Two
// function bouncer(arr){
//     let truthies = [];
//     for(let item of arr){
//         if(item)truthies.push(item);
//     }
//     return truthies;
// }
// console.log(bouncer([6,"",'hello',NaN, undefined,'gyuss']));

// Challenge 14
// function destroyer(arr){
//     console.log(typeof arr);
//     arr.filter(function(item){
//         if(item === )
//     })
// }
// console.log(destroyer([1,2,3,1,2,3],2,3));