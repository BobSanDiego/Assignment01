// STEP 1
// convert to camel case (lower camel case assumed)
    // let someMonth
    // function theMonth()
    // let currentMonth
    // let summerMonth
    // let myLibraryFunction

// STEP 2
// give examples of...
// numeric literal
//      100;
// string literal
//      "Hello, World!";
// boolean literal
//      true;
// null literal
//      null;

// STEP 3
// Give me two examples of complex / variable expressions.
// let mySum = 2000 + 25;
// let myName = "John" + " " + "Doe";


// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: 
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
// Use Camel Casing and Hungarian Notation when naming your identifiers.
    // let strFirstName;
    // let strLastName;
    // let strAddress;
    // let strCity;
    // let strState;
    // let numZipCode;
    // let numYourAge;
    // let strReferralSource;
    // let boolMayWeContactYou;

// STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
    // let strFirstName = "John";

    // let strLastName = "Smith", strCity = "San Diego";

    // let strAddress, strState, numZipCode;
    // strAddress = "8083 Camino Awsom";
    // strState = "CA";
    // numZipCode = 92037;

// STEP 6
// Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.

    // let myName = "Bob";
    // let myAge = 25;
    // console.log(myName + " is " + myAge + " years old");
    // Bob is 25 years old

// STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

    // let isMale = true;
    // let genderInfo = isMale + ", I am a male.";
    // console.log(genderInfo);
    // true, I am a male.  

    // let myHeight = 60;
    // let weirdResult = myHeight + isMale;
    // console.log(weirdResult);
    // 61

// STEP 8 
// Is the following string literal valid? If not, how would you fix it?

    // let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
    // console.log(someString)

    // No, it's not valid because the single quote in "I'm" ends the string early.
    // you could fix it by escaping the single quote with a backslash:
    // let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
    // Or use double quotes for the outer string:
    // let someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\""

// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
    // let nullVar = null;
    // console.log(nullVar); // null
    // let undefinedVar;
    // console.log(undefinedVar); // undefined

// STEP 10
// Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined. 
    // console.log(typeof "Hello, World!"); // string
    // console.log(typeof 12); // number
    // console.log(typeof true); // boolean
    // console.log(typeof {name: "Bob", age: 25}); // object
    // console.log(typeof undefined); // undefined

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want you to use 
// 2 concatenation operators to construct this string of text. One after the text “Hello” 
// and a second one after your name and before the comma.   
    // let firstName = "Bob";
    // let lastName = "Reap";
    // alert("Hello " + firstName + " " + lastName + ", welcome to the JavaScript class!");

// STEP 12
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.
    // let name = "Bob Reap";
    // alert("Hello " + name + ", welcome to the JavaScript class!");   

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text 
// but using the variables as opposed to hard coded text.
    // let name = "Bob Reap";
    // let course = "JavaScript";
    // alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 14  
// Rework the above string so that a line break is added right before the word “Welcome”. 
// Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
// Substitute my name for your name.
// Use the escape sequence, \n, within your string to achieve this result.
    // let name = "Bob Reap";
    // let course = "JavaScript";
    // alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user 
// for their name. The prompt’s response will now be captured in the name variable
    // let name = prompt("What is your name?");
    // let course = "JavaScript";
    // alert("Hello " + name + ".\nWelcome to the " + course + " class!"); 

// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt 
// that asks the user for the class they are taking. The prompt’s response 
// will now be captured in the course variable.
    // let name = prompt("What is your name?");
    // let course = prompt("What class are you taking?");
    // alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 17
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.
    // let x = 10;
    // let y = 20;
    // console.log(x + y); // 30
    
// STEP 18
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
    // let x = 20;
    // x += 20;
    // console.log(x); // 40

// STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
    // let x = 20;
    // x *= 5;
    // console.log(x); // 100

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
    // let x = 20 % 3;
    // x /= 1;
    // console.log(x); // 2

// // STEP 21
// Using a set of Comparison and Logical operators, write an application that 
// evaluates to true and displays the result within the console window.
    // let a = 1;
    // let b = 2;
    // let c = 3;
    // let d = 4;
    // console.log((a < b) && (d > c)); // true


// // STEP 22
// Using a set of Comparison and Logical operators, write an application that 
// evaluates to false and displays the result within the console window. 
// The application cannot use the same operators used in the previous application.
    // let a = 1;
    // let b = 2;
    // let c = false;
    // console.log((a == b) || (c)); // false



