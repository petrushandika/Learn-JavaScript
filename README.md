# Learn-JavaScript
***Learn JavaScript*** repository is created for personal learning and self-practice purposes in mastering JavaScript. With structured materials, clear code examples, and easily understandable explanations, its goal is to facilitate effective learning. This repository is designed to support individual learning journeys, providing a solid foundation for understanding the fundamental concepts and practical applications of JavaScript in web and application development.

### JavaScript Basics
---
- [x] **alert('...');** <br>
Use this command to display an alert message to the user in the browser. <br>
```javascript
alert('Hello, World!'); // Display an alert message with 'Hello, World!' 
```

- [x] **document.body.innerHTML = '...';** <br>
Manipulate the content of the HTML body element by replacing its content with the given value. <br>
```javascript
document.body.innerHTML = 'This is a new content.'; // Replace the content of the HTML body with 'This is a new content.'
```

- [x] **var ... = value;** <br>
Create and declare a variable by providing a variable name in the '...' placeholder and assigning an initial value through the 'value' expression. <br>
```javascript
var number = 21; // Declare a variable 'number' with the value 21
var greeting = 'Hello, World!'; // Declare a variable 'greeting' with the value 'Hello, World!'
```

- [x] **console.log(...);** <br>
Used to print (log) a value or message to the JavaScript console in the browser, useful for debugging and monitoring purposes.
```javascript
var message = 'This is a log message.'; // Create a variable 'message' with the value 'This is a log message.'
console.log(message); // Log the message to the console
```

### Numbers and Math
---
- [x] **Order of Operations:** <br>
The sequence in which mathematical operations are performed. It follows the acronym BIDMAS/BODMAS, representing Brackets, Orders (exponents and roots, etc.), Division and Multiplication, and Addition and Subtraction.
```javascript
let result = (5 + 3) * 2 - 4 / 2; // The result is 16
```

- [x] **Operators:** <br>
Key mathematical symbols used in operations:
    - **Brackets `(...)` :** Used to prioritize calculations within.
    - **Plus `+` :** Adds two values.
    - **Minus `-` :** Subtracts the right operand from the left operand.
    - **Times `*` :** Multiplies two values.
    - **Divided `/` :** Divides the left operand by the right operand.
```javascript
let addition = 10 + 5; // 15
let subtraction = 8 - 3; // 5
let multiplication = 4 * 6; //24
let division = 15 / 3; //5
```

- [x] **Data Types:** <br>
Different representations of numeric values:
    - **int (Integer):** Whole numbers without decimal points.
    - **float (Floating Point):** Numbers with decimal points.
    - **double:** Double-precision floating-point numbers.
```javascript
let integerNumber = 42;
let floatingPointNumber = 3.14;
let doubleNumber = 2.718281828; // Example usage of double-precision
```

- [x] **Mathematical Functions:** <br>
Tools for manipulating and rounding numbers:
    - **Math.round(...):** Rounds a number to the nearest integer.
    - **Math.floor(...):** Rounds a number down to the nearest integer.
    - **Math.ceil(...):** Rounds a number up to the nearest integer.
```javascript
let originalNumber = 5.67;

let roundedNumber = Math.round(originalNumber);
let floorNumber = Math.floor(originalNumber);
let ceilNumber = Math.ceil(originalNumber); 
```

### Strings
---
- [x] **Quotation Marks:** <br>
Strings can be enclosed using single quotes (''), double quotes ("") or backticks (``).
```javascript
let singleQuotes = 'Hello, World!';
let doubleQuotes = "Hello, World!";
let backticks = `Hello, World!`;
```

- [x] **Alert:** <br>
Display a pop-up alert with a specified message.
```javascript
alert('Hello, World!');
```

- [x] **Data Types:** <br>
Use `typeof` to determine the data type.
```javascript
typeof 1;        // Returns 'number'
typeof 'hello';  // Returns 'string'
```

- [x] **Character Types:** <br>
Characters can be letters (a, b, c), numbers (1, 2, 3), symbols (!, @, #), escape characters (\'), and new line characters (\n).

- [x] **Concatenation:** <br>
Combine strings and expressions using concatenation.
```javascript
let concatenatedString = 'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100;
```

- [x] **Interpolation:** <br>
Use backticks for string interpolation, embedding expressions directly.
```javascript
let interpolatedString = `Items (${1 + 1}) $${(2095 + 799) / 100}`;
```

- [x] **Multi-line String:** <br>
Create a string that spans multiple lines using backticks.
```javascript
let multiLineString = `This is
a multi-line
string.`;
```

### Variables
---
- [x] **Declaration:** <br>
Variables can be declared using `let` followed by a name and an optional initial value.
```javascript
let variableName = value;
```

- [x] **Naming Rules:** <br>
    - Variable names cannot start with a number or special character and cannot use reserved words.
    - Semicolons (`;`) are used to terminate statements, similar to how dots (`.`) are used in objects.

- [x] **Naming Conventions:** <br>
Follow specific naming conventions for clarity:
    - **camelCase:** `cartQuantity`
    - **PascalCase:** `CartQuantity`
    - **kebab-case:** `cart-quantity` (preferably used in HTML and CSS)
    - **snake_case:** `cart_quantity` (commonly used in other programming languages)

- [x] **Constant Declaration:** <br>
Constants are declared using `const` and cannot be reassigned.
```javascript
const constantName = value;
```

- [x] **Legacy Declaration:** <br>
 `var` is an older way to declare variables, it has function scope and can be redeclared.
```javascript
var variableName = value;
```

- [x] **Evaluation:** <br>
`eval(...)` is used to convert a calculation string into an actual mathematical operation.
```javascript
eval('2 + 2'); // Returns 4
```

### Boolean and If-Statement
---
- [x] **Boolean:** <br>
Booleans represent values of either True or False.
```javascript
let isTrue = true;
let isFalse = false; 
```

- [x] **Comparison Operators:** <br>
Used for comparing values with lower priority in mathematics.
    - Greater Than `>`
    - Less Than `<`
    - Greater Than or Equal To `>=`
    - Less Than or Equal To `<=`
    - Equal To `===`
    - Not Equal To `!==`
```javascript
let greaterThan = 5 > 3;          // true
let equalTo = 'hello' === 'world'; // false
```

- [x] **If-Statement:** <br>
Control flow statements for decision-making.
    - `if`
    - `if-else`
    - `if-else if-else`
```javascript
let x = 10;

if (x > 5) {
  console.log('x is greater than 5');
} else if (x === 5) {
  console.log('x is equal to 5');
} else {
  console.log('x is less than 5');
}
```

- [x] **Logical Operators:** <br>
Used to combine and manipulate boolean values.
    - `&&` (AND)
    - `||` (OR)
    - `!` (NOT)
```javascript
let isTrueCondition = true;
let isFalseCondition = false;

if (isTrueCondition && isFalseCondition) {
  console.log('Both conditions are true');
}

if (isTrueCondition || isFalseCondition) {
  console.log('At least one condition is true');
}

if (!isFalseCondition) {
  console.log('The condition is not false');
}
```

- [x] **Falsy Values:** <br>
Values that are considered false in boolean contexts.
    - `false`
    - `0`
    - `''`
    - `NaN`
    - `undefined`
    - `null`
```javascript
let falsyValue = false;
let zeroValue = 0;
let emptyStringValue = '';
let notANumber = NaN;
let undefinedValue = undefined;
let nullValue = null;

if (falsyValue || zeroValue || emptyStringValue || notANumber || undefinedValue || nullValue) {
  console.log('This block will not be executed');
}
```

- [x] **Shortcut Operations:** <br>
Efficient ways to perform conditional operations.
    - Ternary Operator: `true? 'truthy' : 'falsy';`
    - Guard Operator (AND Operator and OR Operator)
    - Default Operator
```javascript
let result = (5 > 3) ? 'trueResult' : 'falseResult'; // Ternary Operator

let guardResult = true && 'guardValue'; // Guard Operator (AND Operator)

let guardResultOr = false || 'guardValueOr'; // Guard Operator (OR Operator)

let defaultValue = undefined || 'default'; // Default Operator
```

### Functions
---
- [x] **Function Declaration:** <br>
A function is declared using the `function` keyword, followed by a name and a pair of parentheses.
```javascript
function functionName() {
  // Code to be executed
}
```

- [x] **Return Statement:** <br>
The `return` statement is used to specify the value that a function should return when it is called.
```javascript
function addNumbers(a, b) {
  return a + b;
}
```

- [x] **Parameters:** <br>
Parameters are variables that you declare in the function's parentheses. They act as placeholders for values that will be passed to the function when it is called.
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

- [x] **Function Call:** <br>
Functions are executed or called by using their name followed by parentheses. If the function has parameters, you pass values inside the parentheses.
```javascript
greet('John'); // Outputs: Hello, John!
```

- [x] **Function Expression:** <br>
A function expression is another way to define a function. It can be stored in a variable.
```javascript
let multiply = function(a, b) {
  return a * b;
};
```

- [x] **Anonymous Function:** <br>
An anonymous function is a function without a name. It can be assigned to a variable or used directly where it's needed.
```javascript
let square = function(x) {
  return x * x;
};
```

### Objects
---
- [x] **Object Literal:** <br>
Objects are created using curly braces `{}` and can contain properties and methods.
```javascript
const myObject = {};
```

- [x] **Dot Notation:** <br>
Properties and methods of an object can be accessed or assigned using dot notation.
```javascript
const person = {
  name: 'John',
  age: 25
};
console.log(person.name); // Outputs: John
```

- [x] **Bracket Notation:** <br>
Properties and methods can also be accessed or assigned using bracket notation.
```javascript
const person = {
  'name': 'John',
  'age': 25
};
console.log(person['name']); // Outputs: John
```

- [x] **Nested Object:** <br>
Objects can be nested within other objects to create a hierarchical structure.
```javascript
const company = {
  employee: {
    name: 'Alice',
    position: 'Developer'
  }
};
```

- [x] **Function Inside Object:** <br>
Functions can be included as properties of an object, forming a method.
```javascript
const myObject = {
  myMethod: function() {
    console.log('Function Inside Object');
  }
};
myObject.myMethod(); // Outputs: Function Inside Object
```

- [x] **Auto-Boxing:** <br>
Certain operations automatically convert primitive values to objects for method access.
     - `.length`
     - `.toUpperCase()`

- [x] **Shortcut Object:** <br>
Use destructuring to create variables directly from object properties.
```javascript
const obj = {
  message: 'Good Job!',
  price: 799
};

const { message, price } = obj;
console.log(message); // Outputs: Good Job!
console.log(price);   // Outputs: 799
```

- [x] **Shorthand Method:** <br>
Shorthand syntax for defining methods within an object.
```javascript
const obj = {
  method() {
    console.log('Shorthand Method');
  }
};

obj.method(); // Outputs: Shorthand Method
```

### JSON (JavaScript Object Notation)
---
- [x] **Data Interchange:** <br>
JSON is utilized when transferring data between different systems or platforms.

- [x] **Function Not Supported:** <br>
JSON does not support functions as values. It focuses on representing data in a structured format.
```json
{
  "name": "shirt",
  "delivery-time": "1 day",
  "rating": {
    "stars": 4.5,
    "count": 87
  }
}
```

- [x] **JSON.stringify(...):** <br>
Converts a JavaScript object into a JSON string.
```javascript
const data = {
  name: 'shirt',
  deliveryTime: '1 day',
  rating: {
    stars: 4.5,
    count: 87
  }
};

const jsonString = JSON.stringify(data);
```

- [x] **JSON.parse(...):** <br>
Converts a JSON string into a JavaScript object.
```javascript
const jsonString = '{"name":"shirt","deliveryTime":"1 day","rating":{"stars":4.5,"count":87}}';

const parsedData = JSON.parse(jsonString);
```

- [x] **localStorage Methods:** <br>
   - `localStorage.setItem('...', '...');`: Adds a key-value pair to the local storage.
   - `localStorage.getItem('...');`: Retrieves the value associated with a given key from local storage.
   - `localStorage.removeItem('...');`: Removes a key-value pair from local storage.
```javascript
localStorage.setItem('username', 'John');
const storedUsername = localStorage.getItem('username');
localStorage.removeItem('username');
```

### Document Object Model (DOM)
---
- [x] **document.body:** <br>
Represents the body element of the HTML document.
```javascript
const bodyElement = document.body;
```

- [x] **document.querySelector(...):** <br>
Retrieves the first element that matches the specified CSS selector.
```javascript
const selectedElement = document.querySelector('selector / .class / #id');
```

- [x] **Manipulating Inner HTML:** <br>
Modifies the HTML content of an element selected with `document.querySelector()`.
```javascript
document.querySelector('selector').innerHTML = 'Changed';
```

- [x] **Selecting Elements for Interaction:** <br>
Store a reference to an element for later interaction.
```javascript
const elementVariable = document.querySelector('.class');
```

- [x] **Event Listeners:** <br>
Allows JavaScript to respond to various events triggered by user actions.
     - `onclick`: Click event.
     - `onkeydown`: Key press event.
     - `onscroll`: Scrolling event.
     - `onmouseenter`: Hovering over event.
     - `onmouseleave`: Stop hovering over event.
```javascript
elementVariable.onclick = function() {
  // Handle click event
};

elementVariable.onkeydown = function(event) {
  // Handle key press event
};

elementVariable.onscroll = function() {
  // Handle scrolling event
};

elementVariable.onmouseenter = function() {
  // Handle hovering over event
};

elementVariable.onmouseleave = function() {
  // Handle stop hovering over event
};
```

### HTML, CSS, JavaScript Together
---
- [x] **Adding a Class:** <br>
Use `classList.add()` to add a class to an HTML element, dynamically changing its style.
```javascript
element.classList.add('name-class');
```

- [x] **Removing a Class:** <br>
Utilize `classList.remove()` to remove a class from an HTML element, adjusting its style accordingly.
```javascript
element.classList.remove('name-class');
```

### Arrays

- [x] **Array Index Position:** <br>
Arrays use zero-based indexing to access and reference elements.
```javascript
const exampleArray = [0, 1, 2, 3, 4, 5];
```

- [x] **Checking Array Type:** <br>
Use `Array.isArray()` to determine if a variable is an array.
```javascript
Array.isArray(exampleArray); // Returns true
```

- [x] **Special Array Manipulation Methods:** <br>
   - `push()`: Adds an item to the end of the array.
   - `pop()`: Removes an item from the end of the array.
   - `unshift()`: Adds an item to the front at index 0.
   - `shift()`: Removes an item from index 0.
   - `slice()`: Changes/inserts/deletes items in an array.
   - `indexOf()`: Finds and returns the index of an item in the array.
   - `length()`: Returns the number of elements in the array.
```javascript
exampleArray.push(6);        // Adds 6 to the end
exampleArray.pop();          // Removes the last item
exampleArray.unshift(-1);    // Adds -1 to the front
exampleArray.shift();        // Removes the first item
exampleArray.slice(1, 3);    // Returns a new array from index 1 to 2
exampleArray.indexOf(3);     // Returns the index of the item 3
exampleArray.length;         // Returns the number of elements
```

### Loops
---
- [x] **While Loop:**
The `while` loop repeats a block of code while a specified condition is true.
```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

- [x] **For Loop:**
The `for` loop is commonly used when the number of iterations is known.
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

- [x] **Looping Through an Array:**
Use a `for` loop to iterate through each item in an array.
```javascript
const todoList = [
  'Study',
  'Exercise',
  'Workout'
];

for (let index = 0; index < todoList.length; index++) {
  const value = todoList[index];
  console.log(value);
}
```

- [x] **Accumulator Pattern:**
The accumulator pattern is used to accumulate a result while iterating through an array.
```javascript
const nums = [1, 2, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}
console.log(total);
```

- [x] **Break and Continue:**
   - `break`: Exits a loop early.
   - `continue`: Skips one iteration.
```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
  continue;
}
  console.log(i);
  if (i === 8) {
  break;
  }
}
```
```javascript
let i = 1;

while (i <= 10) {
  if (i % 3) {
  i++;
  continue;
}
  console.log(i);
  i++;
}
```

