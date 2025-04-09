/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// nowrefactored
// ============================================

// S - 1
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// S - 2

let numA = 5, numB = 10;
let sum = numA + numB;
console.log("The sum of 5 and 10 is " + sum);

// S - 3 

let product = numA * numB;
console.log("The product of 5 and 10 is " + product);

// S - 4

let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

// Script 1

function greet(name) {
   console.log(`Welcome, ${name}!`);
}
greet("Alice");
greet("Bob");
greet("Charlie");

// Script 2

function add(a, b) {
   return a + b ;
}

function printSum(num1, num2) {
   console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}.`);
}
let num1 = 5, num2 = 10;
printSum(num1, num2);
printSum(6,10);
printSum(3,7);

// Script 3

function multiply(a, b) {
   return a * b;
}

function printProduct(num1, num2) {
   console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}.`);
}
printProduct(num1, num2);

// Script 4

function printNames(listnames) {
   console.log("Names in the list: ");
   for(let i = 0; i < listnames.length; i++) {
      console.log(listnames[i]);
   }
}
let listnames = ["Alice", "Bob", "Charlie"];
printNames(listnames);


