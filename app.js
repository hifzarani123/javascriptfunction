// // 2. Write a
// // function that takes first & last name and then it
// // greets the user using his full name.


// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello " + fullName);
// }
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greetUser(firstName, lastName);


// // 3. Write a
// // function that adds two numbers(input by user)
// // and returns the sum of two numbers.

// function sumOf(firstNum, secondNum) {
//     var sum = firstNum + secondNum;
//     return sum;
// }
// num1 = +prompt("Enter first number to add");
// num2 = +prompt("Enter second number to add");
// var sum = sumOf(num1, num2);
// document.write("First number: " + num1 + "<br/>Second number: " + num2 + "<br/>Sum: " + sum);




// // 4. Calculator:
// //     Write a function that takes three arguments num1, num2 operator & compute the desired operation.
// // Return an d show the desired result in your browser.

// function calculator(num1, num2, operator) {
//     var ans;
//     switch (operator) {
//         case "+":
//             ans = num1 + num2;
//             break;
//         case "-":
//             ans = num1 - num2;
//             break;
//         case "*":
//             ans = num1 * num2;
//             break;
//         case "/":
//             ans = num1 / num2;
//             break;
//         case "%":
//             ans = num1 % num2;
//             break;
//     }
//     return ans;
// }
// num1 = +prompt("Enter first number");
// num2 = +prompt("Enter second number");
// operator = prompt("Enter the operator");
// var result = calculator(num1, num2, operator);
// document.write(num1 + " " + operator + " " + num2 + " = " + result);



// // 5. Write a function that squares its argument.



// function squareOf(num) {
//     var square = num * num;
//     return square;
// }
// var anyNum = +prompt('Enter any number to print its square');
// var square = squareOf(anyNum);
// document.write("Square of " + anyNum + " is " + square);






// // 6. Write a function that computes factorial of a number.



// function factorialOf(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact
// }
// var anyNum = +prompt('Enter any number to print its factorial');
// var factorial = factorialOf(anyNum);
// document.write('Factorial of ' + anyNum + ' is ' + factorial);



// // 7. Write a function that take start and end number as inputs & display counting in your browser.




// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br/>");
//     }
// }
// var start = +prompt('Enter the starting number of counting');
// var end = +prompt('Enter the ending number of counting');
// counting(start, end);




// // 9. Write a

// // function that calculates /the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i.Arguments as value
// // ii.Arguments as variables




// function area(width, height) {
//     var A = width * height;
//     return A;
// }
// var area1 = area(20, 15);
// document.write('<h3>i. Arguments as value</h3>Width: 20<br/>height: 15<br/>Area: ' + area1);
// var width = 20;
// var height = 15;
// var area2 = area(width, height);
// document.write('<h3>ii. Arguments as variables</h3>Width: ' + width +
//     ' <br/>Height: ' + height + '<br/>Area: ' + area2);


// // 10. Write a JavaScript
// // function that checks whether a passed
// // string is palindrome or not ?
// //     A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.






// function palindrome(string) {
//     var reverse = string.split("").reverse().join("");
//     if (string === reverse) {
//         document.write(string + " is palindrome");
//     } else {
//         document.write(string + " is not palindrome");
//     }
// }
// var string = prompt("Enter any string to check whether it is palindrome or not");
// palindrome(string);


// // 12. Write a JavaScript
// // function that accepts a string as a
// // parameter and find the longest word within the string.


// function longestWord(string) {
//     var wordsArray = string.toLowerCase().split(" ");
//     var longest = wordsArray[0];
//     for (var i = 1; i < wordsArray.length; i++) {
//         if (longest.length < wordsArray[i].length) {
//             longest = wordsArray[i];
//         }
//     }
//     return longest;
// }
// var string = prompt('Enter any string to find the longest word');
// var longest = longestWord(string);
// document.write("String: " + string + "<br/>Longest word: " + longest);


// // 11. Write a JavaScript
// // function that accepts a string as a
// // parameter and converts the first letter of each word of the
// // string in upper
// // case .


// function titleCase(string) {
//     var wordsArray = string.toLowerCase().split(" ");
//     for (var i = 0; i < wordsArray.length; i++) {
//         wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
//     }
//     return wordsArray.join(" ");
// }
// var string = prompt('Enter any string to convert in title case');
// var title = titleCase(string);
// document.write("Title Case: " + title);




// // 13. Write a JavaScript
// // function that accepts two arguments, a
// // string and a letter and the
// // function will count the number of occurrences of the specified letter within the string.   
// function occurencesOfALetter(string, letter) {
//     var occurence = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() === letter.toLowerCase()) {
//             occurence = occurence + 1;
//         }
//     }
//     return occurence;
// }
// string = prompt("Enter any string");
// letter = prompt('Enter any letter to check its occurence in the given string')
// var occurences = occurencesOfALetter(string, letter);
// document.write("String: " + string + "<br/>There are " + occurences + " occurence(s) of letter " + letter);