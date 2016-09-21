/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now(); 
}

/*
  Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car
Make.prototype = new Car(); 

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the general Make function.
  3. It must have one argument that will to hold the model name.
  4. The constructor must define a property to hold the model name.
 */
function Honda (name) {
  this.model = name;
}
function Volkswagon (name) {
  this.model = name; 
}
function Dodge (name) {
  this.model = name; 
}
Honda.prototype = new Make("Honda");
Volkswagon.prototype = new Make("Volkswagon");
Dodge.prototype = new Make("Dodge"); 
/*
    1. Create a constructor function named after your favorite car model.
    2. It must inherit from the specific make type you created in previous step.
    3. When creating the inheritance relationship, pass in the model name
       to the make constructor function
*/
function Fit (name) {
  this.modelName = name;
}
function Jetta (name) {
  this.modelName = name; 
}
function GT40 (name) {
  this.modelName = name;
}
// Set the prototype to appropriate model you created above and set the model name argument
Fit.prototype = new Honda("Fit");
Jetta.prototype = new Volkswagon("Jetta"); 
GT40.prototype = new Dodge("GT40"); 
var mine = new Fit(); 
var forTheWife = new Jetta();
var mySecondBaby = new GT40(); 

console.log("mine", mine); 
mine.license = "9080807"; 
console.log("forTheWife", forTheWife); 
forTheWife.license = "384308";
console.log("mySecondBaby", mySecondBaby); 
mySecondBaby.license = "384039";

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/