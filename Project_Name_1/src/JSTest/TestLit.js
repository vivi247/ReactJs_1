function CalulatorService(){

     function add(a,b) {
         return a + b;
     }

     function subtract(a,b) {
         return a - b;
     }

     function multipy(a, b) {
         return a * b;
     }

     function divide(a, b=1) {
         return a/b;
     }

     return {
         add,
         subtract
     }
}

const {add:addition, subtract:subtraction} = CalulatorService();

console.log(addition(5,8));
//  add(5,8);

 console.log(subtraction(6,4));
// subtract(6,4);


function x1() {
    var x = 100;
    console.log(x);
    
}
x1();
console.log(x);