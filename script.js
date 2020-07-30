/* Loops

In computer sciemce, a lopp is a programming structure that repeats a sequence of instruction untill a specific condition is met.

Loops are all suppoerted by all modern programming languages, but their syntax and implementation may difer *\

NOTE:Since loops will repaeat untill given specific condition is met, It is important to make sure the loop will break at some point. If the condition never met, the loop will continue indefinitely creating an infinite loops is a BAD programming practice, since they can cause programs to crash.

Source: techterms.com/definition/loop

// the for loop

//SYNTAX:
	for(statement1, statement2, statement3) {
		code block to be executed
	}

	Statement1 - is executed (one time) usually we define or set a variable or counter on where to start the loop

	Statement2 - defined the condition for excur=ting the code block.

	Statement3 - is excuted (everytime) after the code block has been excuted

	(++) Increment Operator
	(--) Decrement Operator
*/
// A LOOP WILL CONTINUE RUNNING IF THE STATEMENT IS TRUE. SO AT SOMEPOINT YOU NEED TO BREAK YOUR LOOP OR THE CONDITION NEEDS TO BE FALSE


	// for(let i = 0; i < 3; i++) {
	// 	console.log("This is the outer loop")
	// 	for(let j = 0; j < 3; j++){
	// 		console.log("This is the inner loop")
	// 	}
	// }

	  for (let s = 0; s <= 1; s++) {
	  	a = "";
	  	for (let t = s; t <= 5; t++) {
	 		a += "*" // s = s + '*'
	  		console.log(a)
	  	}
	 }
	
	for (let s = 5; s >= 0; s--) {
	     	a = "";
	     for (let j = s; j >= 0; j--) {
	         a += " *"
	     }
	     console.log(a);
	 }

	
		for  (i = 5; i >= 0; i--){
			j = ""
			k = ""
			for( let s = 5; s > i; s--){
				j += " "
			}
			for(let j = i; j > 0; j--) {
				k += "*"
			}
			console.log(j,k)
		}

	/* while(condition){
		code to be excuted here.
	}



let i = 0	
	while (i < 10) {
		console.log("The number is " + i)
		i++
	}*/

// do while loop
/* 
	do{
		code to excuted here
	}	 		
	while(condition)
	The do/while statement creates a loop that excutes a block of code ONCE even if the condition is false.

*/

// let i = 0;

// do {
// 	console.log("Hey")
// 	i++
// }
// while(i < 5)	

//for on loop
/* SYNTAX:
	for(variable name in object) {
		code to be executed 
	}
*/

// let person = {
// 	name: "Asher Jabez",
// 	age: 52,
// 	address: "KL Malaysia"
// }	

// for(let property in person){
// 	console.log(property + ": " + person[property])
// }

// let fruits = ['apple', 'mango', 'banana', 'melon', 'watermelon', 'grapes']
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits.length)


// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i])
// }

// the for/of loop 
 /*SYNTAX:
 	for(variable of iterable){
		code block to be executed
 	}

 	variable - for every iteration the value of the next property is assiged to the variable. Variable can be declared with const , let, or var 

 	iterable -An objec that has iterable properities*/

 	// let fruits = ['apple', 'mango', 'banana', 'melon', 'watermelon', 'grapes'];
 	// for (let fruit of fruits) {
 	// 	console.log(fruit)
 	// }	



	// for (let i = 1; i <= 100; i++){
	// 	if((i % 5 == 0) && (i % 3 == 0))
	// 		console.log("FizzBuzz");
	// 	else if (i % 3 == 0)
	// 		console.log("Fizz");
	// 	else if (i % 5 == 0)
	// 		console.log("Buzz")
	// 	else 
	// 		console.log(i)
	// }

	for (let i = 1; i <= 100; i++){
		let output = "";

		if(i % 3 == 0) {
			output += "Fizz"
		}

		if(i % 5 == 0) {
			output += "Buzz"
		}

		if(output == "") {
			output = i
		}
		console.log(output)
	}