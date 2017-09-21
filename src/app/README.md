# What is ES6

### Table of Contents
* [Getting Started](#getting-started)
* [Let and Const](#let-and-const)
* [String Substitution](#string-substitution)
* [Arrow functions](#arrow-functions)
* [Destructuring assignment](#destructuring-assignment)
* [Shorthand property names](#shorthand-property-names)
* [Default values](#default-values)
* [Modules](#modules)
* [Classes](#classes)

## Getting Started
ES6 is the acronym for ECMAScript 6, the next-generation of javascript. It is bringing us a lots of new features that will allow to code faster/easily and do things you weren't able before.

This mashup is using Babel to 'translate' your ES6 code into a regular JS code, so normal browsers can read and understand your application. Thanks to this feature, you'll be able to code as you would do *in the future*, so you're not gonna get stucked in the past.

Anyways, if you don't feel confortable, you can write common JS code, and it's gonna work fine as well.

Some of the cool new features:

## Let and Const
New `let` variables are not gonna be hoisted to the top of the function where they were declared. A very simple example is:

```js
// Common var
function printName() {
  var name = 'Pedro';
  if (true) {
    var name = 'Rafa';
    console.log(name);  // Rafa
  }

  console.log(name);    // Rafa
}

// New let
function printName() {
  var name = 'Pedro';

  if (true) {
    let name = 'Rafa';
    console.log(name);  // Rafa
  }

  console.log(name);    // Pedro
}
```

Also, the ability to create constants is something we didn't have before, until now:
```js
const SENSE_URL = 'http://localhost:8080';
```

## String Substitution
Finally is here! No more concats using `+` between strings, now you can place variables into your string:

```js
const name = 'Rafa';
console.log(`Hi! my name is ${name}`);   // Hi! my name is Rafa

const a = 10;
const b = 5;
console.log(`I can even add numbers, like ${a}+${b}=${a + b}`);     // I can even add numbers, like 10+5=15
console.log(`Even better: (${a} - ${b}) * ${b} = ${(a - b) * b}`);  // Even better: (10 - 5) * 5 = 25
```

I think you already got the point :)

## Arrow functions
Writing functions have never been so easy. Even if you are writing short functions. Here you have some examples of the new Arrow functions:

Standard function
```js
// Common function
function say(something) {
  console.log(something);
}

// Arrow function
const say = (something) => {
  console.log(something);
};
```

Return function
```js
// Common function
function giveTwice(number) {
  return number * 2;
}

const giveTwice = number => number * 2;
```

## Destructuring assignment
Destructuring assignment is a JS expression that allows you to extract data from arrays and objects, and replicate them in new arrays/objects.

Just read those examples, and you'll get an idea of how they work:
```js
// Destructuring assignment, with addition
const fruits = ['apple', 'orange'];
const food = [...fruits, 'cake'];

console.log(food);  // ['apple', 'orange', 'cake'];

// Destricturing assignament, with replacement
const rafa = {
  name: 'Rafa',
  age: 28,
  gender: 'male',
};

const john = {
  ...rafa,
  name: 'John',
};

console.log(john);  // {name: John, age: 28, gender: 'male'};

// Getting properties from an object
// Imagine we get the following object from a $.get request
const response = {
  name: 'Rafa',
  age: 28,
  job: {
    position: 'Sense developer',
    location: 'Madrid',
  },
};

// Common JS
var name = response.name;
var location = response.job.location;

console.log(name + ' is located at ' + location); // Rafa is located at Madrid

// ES6
const {
  name,
  job: {
    location,
  },
} = response;

console.log(`${name} is located at ${location}`); // Rafa is located at Madrid

```

## Shorthand property names
Another small but cool & powerful feature are the shorthand property names.

Basically when the object property has the same name than a variable, it'll be assigned automatically, without needing to duplicate elements;

```js
// Common JS
var name = 'Rafa';
var age = 28;

var guy = {
  name: name,
  age: age,
};

console.log(guy);     // {name: 'Rafa', age: 28};

// ES6
const name = 'Rafa';
const age = 28;

const guy = {
  name,
  age,
};

console.log(guy);     // {name: 'Rafa', age: 28};
```

## Default values
You also can easily setup default values for your function's parameters, just to make sure you always get something (event if parameters are not sent).

```js
// Default data
const getPersonData = ({
  name,
  age: 18,
  gender: 'male',
}) => `${name} is ${age} years old, and is a ${gender}.`;

getPersonData({ name: 'Rafa', age: 30});            // Rafa is 30 years old, and is a male
getPersonData({ name: 'John'});                     // John is 18 years old, and is a male
getPersonData({ name: 'Maria', gender: 'female'});  // Maria is 18 years old, and is a female
```

## Modules
If you don't want to leave all of your javascript in just one file or you do want to re-use some functionality in other parts of your application, you'll probably want to use modules. The magic keyword you need remember is `export`.

```js
// constants.js
export const NAME = 'Rafa';
export const AGE = 28;

// config.js
import { NAME, AGE } from 'constants.js';
const guy = {
  name: NAME,
  age: AGE,
};
```

```js
// constants.js
const getTime = () => new Date();
export default getTime;

// clock.js
import getTime from '.constants.js';
class Clock {
  constructor() { ... }

  showTime = () => getTime();
}
```

## Classes
Javascript does not support classes like other Object-Oriented languages. Instead, Javascript can simulate classes using `functions` and `prototype`.

Below is the new syntax to create classes. You will feel familiar to this way if you come from a Java background or other OO language.

```js
class Person {  
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
}

var rafa = new Person('Rafa');  
rafa.sayHello(); // "Hello, my name is Rafa"  
```
