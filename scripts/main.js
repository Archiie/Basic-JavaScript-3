// Difference between simply writing a code over multiple times and cleaning it up and using a function instead


// Simple code written multiple times
var name1 = "Mark";
console.log("Hi " + name1);

var name2 = "Marry";
console.log("Hi " + name2);

var name3 = "Lisa";
console.log("Hi " + name3);


// Using a function
function greetings(name){
	console.log("Hi " + name);
}

greetings("Mark");
greetings("Marry");
greetings("Lisa");
