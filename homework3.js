//A function that takes at least three arguments and returns the result of some set of operations using those arguments 
const volumeF = function (base,height,width) {
	return base*height*width;
};
console.log(volumeF(3,4,5));

//A function that takes no arguments and returns something 
const a = function(){
	return ("heyo");
};
console.log(a());

//A function that takes arguments, does something but does not return anything
const b = function(name, surname){
	const fullName = name +" "+surname;
	console.log(fullName);
};
console.log(b());

//A function that takes three strings and returns the string that is the longest.
const longestString = function(string1, string2,string3){
	if (string1.length>string2.length && string1.length>string3.length){
		return (string1);
	} else if (string2.length>string1.length && string2.length>string3.length){
		return(string2);
	} else if (string3.length>string1.length && string3.length>string2.length){
		return(string3);
	} else {
		console.log ("wrong input")
	};

};
console.log(longestString("hello","why","bi"));

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
const comparision = function(number1, number2){
	if (number2 === number1){
		return (0);
	} else if (number1>number2){
		return(1);
	} else if (number2>number1){
		return(-1);
	} else {
		console.log("wrong input");
	}
};
console.log(comparision(6,120));

// -Create a multiply function (that multiplies the two given arguments together and returns the result)

const mult = function(varibale1, variable2){
	return (variable2*varibale1);
};
console.log(mult(5,7));

// -Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const division = function(argument1, argument2){
	return(argument1/argument2);
};
console.log(division(18,3));
// -Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) 
const triangleArea = function(height,base){
	return(division(mult(height,base),2));
};
console.log(triangleArea(8,6));
// Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4). Hint: strings have .length, numbers don't - so make a string and then get the length 
const numLength = function(number){
	number = number + " "
	return(number.length - 1);
};
console.log(numLength(4685));
// Create a function that takes two strings and a number. If the length of the two strings concatenated together is greater than the given number, return 1, else return -1
const f2 = function(string1, string2, number){
	stringsum = string1+string2
	if (stringsum.length>number){
		return (1);
	} else { 
		return (-1);
    };
};
console.log(f2("hello","girl",7));
// Create a function runStuff that takes two numbers and a string. If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height. If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here). If the string does not match 'rectangle' or 'triangle', return -1. 
const runStuff = function(base, height, string){
	if (string === "rectangle"){
		return (base*height);
	} else if (string === "triangle"){
		return triangleArea(base, height);
	} else {
		return(-1);
	}
};
console.log(runStuff(6,8,"triangle")); 
//The End






