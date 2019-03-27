var fname ="Vivek";
var lname = "M J";
var age = 29;

const phrase = `My name is ${fname} ${lname} and age is ${age}`;

console.log(phrase);

let multiply = (a,b) => a * b;

let square = a => a * a;

var add = (a, b) => {
    const sum = a + b;
    console.log(sum);
    //return sum
};

const obj = () => ({name:"Vivek", age :29});

console.log(multiply(5,15));

console.log(square(17));
add(4,9);

var person = obj();
console.log(person);

let numbers = [1,2,3,4,5,6,7,8];

let grt2 = numbers.filter(num => num >2);

console.log(grt2);

console.log(numbers.length);

