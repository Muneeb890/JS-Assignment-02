//JAVASCRIPTBASICS
//Qs 01: Rewrite the following code using a ternary operator:
/*let result;
if (score >= 80) {
    result = "Pass";
} else {
    result = "Fail";
}*/

//Qs 02: How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?
/*const user = {
    name: 'Muneeb',
    address: {
      street: '11th Street Bahadurabad',
      city: 'Karachi',
      zipCode: '74800'
    },
  };
 console.log(user?.address?.zipCode)*/

 //Qs 03: Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.
 //for...in Loop:
 /*const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);
}*/
//for...of Loop:
/*const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}*/

// Qs no 04: Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

/*function calculateAverage(array){
    let average = 0;
    for (let i=0; i < array.length; i++){
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length
    return average;
}
const array = [2,8,14];
const result = calculateAverage(array);
console.log(`The average is: ${result}`);*/

//Qs no 05:  Explain the concept of "closures" in JavaScript and provide an example of their practical use.
//CLOSURE GIVES YOU AN ACCESS TO AN OUTER FUNCTION'S SCOPE FROM AN INNER FUNCTION.
/*let value = 0;
function increment() {
    value++
}
increment();
 console.log(value)*/

 //Qs no 06:
/* const student = {
    name: "Muneeb",
    age: 22,
    grades: [85, 90, 78, 95, 88],
    calculateAverage: function () {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / this.grades.length;
        return average;
    }
};
console.log(`Average Grade: ${student.calculateAverage()}`);   */

//Qs no 08: Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
/*const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbersArray) {
  const result = (number % 2 === 0) ? 'even' : 'odd';
  console.log(`${number} is ${result}`);
}*/

//Qs 14:  Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.
/*const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function () {
      console.log(`Starting the engine of the ${this.make} ${this.model}`);
    }
  };
  
  // Instantiating the object and calling the method
  car.startEngine();*/
  
