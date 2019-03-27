// const clock = {
//     time: 0,
//     setTime: function(){
//         console.log(this);
//         const self = this;
//         setInterval(() =>{
//             console.log(this);
//             console.log(this.time++)
//         }, 1000);
//     }
// }

// clock.setTime();


// let num1 = 100;
// let num2 = 200;
// [num1,num2] = [num2, num1];

// console.log(`${num1}  ${num2}`);

// const numbers = [1,2,3,4];
// const number1 = numbers;
// const number2 = [...numbers];

// number1.push(5);
// number1[0] = 10;

// number2.push(90);
// number2[1] = 100;

// console.log(numbers);
// console.log(number1);
// console.log(number2);

const names = ["yes","no","time"];
const moreNames = ["true",...names];
const hasmoreNames = [...names,"false",...moreNames];

console.log(names);
console.log(moreNames);
console.log(hasmoreNames);

var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
 	console.log(typeof bar()); // Work here :)
 };

 var foo1 = function bar1(){ return 12; };
// typeof bar1();  