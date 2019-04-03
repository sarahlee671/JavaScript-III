/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when 'this' keyword doesn't apply to the other 3 binding rules, 'this' defaults to the window object.
* 2. In implicit Binding, when the function is invoked, look to the left of the dot and that is what 'this' is referencing.
* 3. New binding is when the function is invoked with the word new, then 'this' keyword is referencing the object being constructed.
* 4. In explicit binding, we can use .call(), .apply(), or .bind() to tell us what 'this' is going to be in a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const myName = function() {
    console.log(this.name);
};

const james = {
    name: 'James'
};

myName();
window.name = 'Window Name'
myName();




// Principle 2

// code example for Implicit Binding

const introduction = function(object) {
    object.intro = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
};

const robyn = {
    name: 'Robyn', 
    age: 22
};

const john = {
    name: 'John',
    age: 30
};

introduction(robyn);
introduction(john);

robyn.intro();
john.intro();
    



// Principle 3

// code example for New Binding

const Animal = function(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
};

const tiger = new Animal('Tony', 'Tiger', 'orange');



// Principle 4

// code example for Explicit Binding

const foods = function(food1, food2, food3) {
    console.log(`My name is ${this.name} and my favorite foods are ${food1}, ${food2}, and ${food3}.`)
};

const matt = {
    name: 'Matt',
    age: 40
};

const favFoods = ['cookies', 'pizza', 'ice cream'];

foods.apply(matt, favFoods);