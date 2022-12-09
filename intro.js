// 1. JavaScript console API 
// console.log("Hello world", 4+9, "Another log");
// console.warn("this is warning");
// console.error("this is an error");

// 2. Javascript variables:
// what is variables? - Containers to store data values
// var num1 = 34;
// var num2 = 78;
// console.log(num1+num2);

// 3. Data types in Javascript
// Numbers 
// var num1 = 455;
// var num2 = 56.78;

// String 
// var str1 = "this is a string";
// var str2 = 'this is also string';

// Objects 
// var Marks = {
//     ravi: 78,
//     leena: 95,
//     Aayu: 90
// }
// console.log(marks);

// Boolean
// var a = true;
// var b = false;
// console.log(a, b);

// undefined
// var und;
// console.log(und);

// null
// var n = null;
// console.log(n);


/*
At a very High level, there are two types of data types in javascript
1. Primitive Datatypes: undefined, null, Number, String, boolean, Symbol
2. Reference Datatypes: Arrays and Objects
*/

// Arrays
// var arr = [1,5, "leena", 8, 6]
// console.log(arr);

// 4. Operators in JavaScript
// Arithmetic Operators
// var a = 10;
// var b = 5;
// console.log("The value of a + b is: ", a+b);
// console.log("The value of a - b is: ", a-b);
// console.log("The value of a * b is: ", a*b);
// console.log("The value of a / b is: ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c -+ 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 78;
// var y = 90;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators
// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false||  true);
// console.log(false || false);

// Logical NOT 
// console.log(!true);
// console.log(!false);


// 5. Function in JavaScript
// function avg(a, b){
//     return (a+b)/2;
// }
// c1 = avg(5, 8);
// c2 = avg(15, 17);
// console.log(c1, c2);


// 6. Conditional in JavaScript
// var age = 45;
// if(age > 8){
//     console.log('you are not a kid');
// } 
// else{
//     console.log('you are a kid');
// }


/*
if-else Ladder
if(age > 35){
    console.log("you are not a kid");
}
else if(age > 30){
    console.log('not a kid');
}
else if(age > 25){
    console.log('not a kid');
}
else if(age > 22){
    console.log('not a kid');
}
else if(age > 18){
    console.log('not a kid');
}
else {
    console.log('you are kid');
}
*/

/*
function rasna(age){
    if(age > 25){
        console.log("you can drink rasna");
    }
    else {
        console.log("you can not drink rasna");
    }
}

a = rasna(20);
*/


//7. Loops in JavaScript
/*
For Loop
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(elements){
    console.log(elements);
})
*/

// //while loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// // let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// //do-while loop
// let m = 10;
// do{
//     console.log(arr[m]);
//     m++;
// }while(m<arr.length);

/*
 //break-continue
 var arr = [1, 2, 3, 4, 5, 6, 7];
 for(var i=0; i<arr.length; i++){
    if(i==2){
        //break;
        continue; //continue means cancel this iteration and continue
    }
    console.log(arr[i]);
 }
 */

 /*
 let myArr = ["fan", "camera", 67, null, true];
 //array methods
 console.log(myArr.length);
 myArr.pop(); // we can remove last element of array using pop
 console.log(myArr);
 myArr.push('leena');// we can add element in last position of array using push
 console.log(myArr);
 myArr.shift();
 console.log(myArr); //we can remove first element of array using shift
 myArr.unshift('hello');
 console.log(myArr); // we can add element in first position of array using unshift
 
 // unshift also return new length of an array
 let newlen = myArr.unshift("fan");
 console.log(newlen, myArr);
 myArr.toString();

*/

/*
//string methods in javascript
let str = "hello javascript string";
console.log(str.length);
console.log(str.indexOf("string"));
console.log(str.slice(0, 3));
console.log(str.replace("hello", "helllooo"));
*/

/*
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getHours());
*/

//8. DOM Manipulation
// let element = document.getElementById('click');
// console.log(element);

// let eleClass = document.getElementsByClassName("container")
// console.log(eleClass);
// // eleClass[0].getElementsByClassName.background = "yellow";
// eleClass[0].classList.add("bg-primary")

//Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

//Events in JavaScript
// function clicked(){
//     console.log('the button was clicked');
// }

// window.onload = function(){
//     console.log('the document was loaded');
// }

// firstContainer.addEventListner('click', function(){
//     console.log("clicked on container");
// })

//9. Arrow Function
// function summ(a, b){
//     return a+b;
// }

// summ = (a,b)=>{
//     return a+b;
// }

//SetTimout and setinterval
// logKaro = ()=>{
//     console.log("i am your log");
// }
// // // setTimeout(logKaro, 2000);

// // setInterval(logKaro, 5000);

//  clr = setTimeout(logKaro, 2000);

 //Use clearIntervel(clr)/clearTimeout(clr) to cancel setIntervL/setTimeout

//  10. JavaScript localStorage

// localStorage.setItem('name', 'leena')
// localStorage.getItem('name')
//localStorage.removeItem('name')
// localStorage.clear()

//11. JSON
// obj = {name: "leena", length: 5, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse(`{"name": "leena", "length": 5, "a": {"this": "that"}}`)
// console.log(parsed);

//12. Backticks/Template literals
a = 86;
console.log(`this is my ${a}`);





