// for (var i = 1; i <= 10; i++){
//     if (i == 1){
//         console.log("Gold Medal");
//     }else if(i==2){
//         console.log("Silver Medal");
//     }else if(i==3){
//         console.log("Bonze Medal");
//     }else{
//         console.log(i);
//     }
// }

// for (var i = 1; i <= 10; i++){
//     switch(i){
//         case 1:
//         console.log("Gold Medal");
//         break;
//         case 2:
//         console.log("Silver Medal");
//         break;
//         case 3:
//         console.log("Bronze Medal");
//         break;
//         default:
//         console.log(i);
//     }
// }


// for (i = 0; i < 2; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log("Hello");
//     }
// }

// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);

// function letterFinder(word, match) {
//     for(var i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }

// letterFinder("test", "s")

// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//     var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
//     if(condition1 && condition2) { //if both condition matches
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //check if the character at this i position in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         //if the requirements don't match
//         console.log("Please pass correct arguments to the function")
//     }
// }
// letterFinder([],[])
// letterFinder("cat","c")

// var bird = {
//     hasWings: true,
//     canFly: true,
//     hasFurr: true,
//     has4legs: false,
// };

// var sparrow = Object.create(bird);
// var parrot = Object.create(bird);

// console.log(parrot.has4legs);


//functional paradigm
// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice (shoes,tax){
//     return shoes * tax;
// }

// var toPay = totalPrice(shoes,stateTax);
// console.log(toPay);

//object paradigm
// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function(){
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log(`Total Price: `, calculation);
//     }
// }
// purchase1.totalPrice();

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function(){
//         var calculation = this.shoes * this.stateTax;
//         console.log(`Total Price: `, calculation);
//     }
// }
// purchase2.totalPrice();

//classes

// class Car {
//     constructor(color,speed){
//         this.color = "color";
//         this.speed = speed;

//     }
//     turboOn(){
//         console.log("Trubo is on");
//     }
// }
// var car1 = new Car("Red",120);

// car1.turboOn();


// prototype

// var animals = {
//     hasWings: false,
//     hasTail: true,
//     givesMilk: true,
//     adorable: true,
// }

// let buffalow = Object.create(animals);
// console.log(buffalow.givesMilk);


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);