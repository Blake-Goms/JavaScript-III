/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding: The value of "this" is the window or console Object. 
* 2. Implicit Binding: Whenever a function is called, whatever is preceding the . is the object that is "this"
* 3. New Binding: Used with constructors, "this" refers to the specific object that is created, = new Dog, for example would be a new object called 
*    Dog that gets returned by the constructor function.
* 4. Explicit Binding: Whenever .call or .apply are used, "this" is being explicity defined by those functions.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greetMe(name) {
    console.log(this);
}
greetMe('blake');


// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    //sayHello was invoked, it runs and gets the parameter Ryan, 
    //but "this" is whatever is left of .sayHello (= myObj) so then "this.greeting" calls the objects property gets called
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
};
myObj.sayHello('Ryan')


// Principle 3
// code example for New Binding
//The constructor will create an object, when we call it we use the "new" keyword
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
    };
}

const blake = new CordialPerson('Goms')
const goms = new CordialPerson('Blake')
blake.speak();
goms.speak();


// Principle 4
// code example for Explicit Binding
const yourObject = {
    name: 'Blake',
    city: 'a city',
    favoriteFood: '🍕'
}
const thingsYouEnjoy = ['my Fiancee', 'sleep', 'video games']
function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}
console.log(tellUsAboutYourself.call(yourObject, ...thingsYouEnjoy));