//  // We can declared same variable names in same scope with var
// var name = 'Aishwarya';
// var name = "Sakshi";
// console.log(name);

// We can reinitailze value of variables with var
// var name =  'Aishwarya';
// name = "Sakshi"
// console.log(name);

// //  We cann't declare the same variable name in same scope with let
// let name = 'Aishwarya';
// let name = " Sakshi";
// console.log(name); // Identifier 'name' has already been declared

// // We can reinitialize value with let
// let name = 'Aishwarya';
// name = "Sakshi"
// console.log(name)

// We can't change the value with variable declared with const
// const name = 'Sakshi';
// name = "siya";
// console.log(name) //  Assignment to constant variable

// We can't declare and initalize the variable in different line
// const name;
// name ="aishwarya";
// console.log(name); //  Missing initializer in const declaration

// *************************************************************************************************

// function greeter(){
//     let name = 'Aishwarya';
//     console.log(name);
// }
// greeter();
// console.log(name); // ReferenceError: name is not defined

// function greeter() {
//     var name = 'Aishwarya';
//     console.log(name);
// }
// greeter();
// console.log(name); // ReferenceError: name is not defined

// ***************************************************************************************

// if(true){
//     var name = 'Aishwarya';
//     console.log(name);
// }
// console.log(name); // Aishwarya

// {
//     var name = 'Aishwarya';
//     console.log(name);
// }
// console.log(name); // Aishwarya

// ***************************************************************************************

// if(true){
//     let name = 'Aishwarya';
//     console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

// {
//     let name = 'Aishwarya';
//     console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

// *************************************************************************
// let name ="Max";
// function greet(){
//     console.log(name); // Max
// }
// greet() 

// Variable shadowing
// let name = "aishwarya";
// function greet() {
//     let name = "sakshi";
//     console.log(name);
// }
// greet();
// console.log(name);

//  **********************************************************************************************
// Hoisting

// console.log(name); // undefined
// var name = 'Sakshi' 

// console.log(name); // ReferenceError: Cannot access 'name' before initialization
// let name = 'Sakshi'  


//  **********************************************************************************************
// Declared variable without var or let
// name = "Asihwarya";
// console.log(name);

// Declared variable with special keyword
// var undefined = 10;
// console.log(undefined)


// 'use strict';
// name = 10;
// console.log(name) // name is not defined

// *************************************************************************************

// const person1 = { age: 30 }
// const person2 = { age: 30 }
// console.log(person1 == person2)
// console.log(person1 === person2)

// let hobbies = ['sports'];
// let newHobbies = hobbies;
// console.log(hobbies);
// console.log(newHobbies);
// hobbies.push('cooking')
// console.log(hobbies);
// console.log(newHobbies);

// const person1 = { age: 30 }
// const person2 = person1
// console.log(person1 == person2)
// console.log(person1 === person2)

// const hobbies = ['sports'];
// hobbies.push('cooking');
// console.log(hobbies);


// var arr = [1, 2, 3, 4, 5, 6];
// delete arr[4]; // delete element with index 4
// console.log(arr); // [ 1, 2, 3, 4, <1 empty item>, 6 ]

// Remove all elements from array
// var arr = [2, 4, 5, 8];
// console.log(arr);
// arr.length = 0;
// console.log(arr)

// var arr = [3, 4, 2, 2, 4];
// arr.splice(0, arr.length);
// console.log(arr);

// var arr = [1, 3, 4, 5, 2];
// console.log(arr);
// var newArr = [...arr];
// console.log(newArr)

// const obj = { name: 'Aishwarya' };
// obj.name = 'Sakshi';
// console.log(obj);

// const obj = { name: 'Aishwarya' };
// obj.age = 20;
// console.log(obj);

// const obj = { name: 'Aish' };
// obj = { "age": 20 }
// console.log(obj)  // TypeError: Assignment to constant variable.

// *******************************************************************************************

// function greet(){
//     console.log("Welcome");
// }
// console.log(typeof greet); // function

// var name = null;
// console.log(typeof name); // object

// ******************************************************************************************************

// function declaration are hoisited

// abc() // Hello there
// function abc(){
//     console.log("Hello there");
// }

// function expresssion are not hoisted
// abc(); // TypeError: abc is not a function
// var abc = function(){
//     console.log("Hello");
// }

// var holiday = {
//     name: 'Party',
//     greet : function(){
//         console.log(this.name);
//     }
// }
// var holiday = {
//     name: 'Party',
//     greet: () => {
//         console.log(this.name); // undefined Arrow function
//     }
// }
// var holiday = {
//     name: 'Party',
//     greet(){
//         console.log(this.name);
//     }
// }
// var holiday = {
//     name: 'Party',
//     guest: ['Aishwarya', "Sakshi", "Ankita"],
//     greet() {
//         // this.guest.forEach((guest) => {
//         //     console.log(guest, " attending ", this.name);
//         // });

//         this.guest.forEach(function (guest) {
//             console.log(guest, " attending ", this.name);
//         })
//     }
// }

// holiday.greet();


// ***************************************************************************************************************
// var names= ['Aishwarya', "sakshi", "Ankita"]
// names.splice(0, 0, "Sanu", "Kalapana")
// console.log(names.splice(3))
// console.log(names)

// var names = ['Aishwarya', "sakshi", "Ankita", "rashmi", "sanu"]
// console.log(names.slice(1,3));
// console.log(names.slice(-4, -3)); // ['sakshi']
// console.log(names.slice(-4)); 
// console.log(names.slice(4));
// console.log(names);


// var names = ["Aish", "Sakshi", "Ankita"];
// names.push('Sanu', "Kalpana");
// var winner = names
// console.log(names);
// console.log(winner);

// var names = ["Aish", "Sakshi", "Ankita"];
// var looser = ["Harsh", "Rahul"];
// var name = ["Aditi"]
// var winner = names.concat(looser, name)
// console.log(names);
// console.log(winner);
// winner.push("Meera");
// console.log(winner);

// var personData = [{ name: 'Sakshi' }, { name: "Aish" }];
// // console.log(personData.findIndex((person, ind) => {
// //     return person.name === 'Ankita';
// // }));
// console.log(personData.find((person, ind) => {
//     return person.name === 'Ankita';
// }));
// // console.log(personData.find((person, ind) => {
// //     return person.name === 'Sakshi';
// // }));

// var names = ['Aishwarya', 'Sakshi', 'Ankita', 'Ritika'];
// // console.log(names.includes('Aishwary'));
// var newArray = names.map((el) => el + " helllo");
// console.log(newArray);
// console.log(names)


// var names =["Aishwarya", 'Sakshi', 'Ritika'];
// names.forEach((name, index)=>{
//    return names[index] = 'Hello ' + name
// });
// console.log(names);

// var nums = [2, 5, 1, 50, 15];
// // let sortArr = nums.sort((a, b) => a - b)
// // console.log(nums, sortArr);
// let reverseArr = nums.reverse();
// console.log(nums, reverseArr);

var nums = [2, -4, 0, 4, -40, 5, -2, -8];
let positiveArr = nums.filter((el) => {
    return el > 0
});
console.log(positiveArr);
console.log(nums);