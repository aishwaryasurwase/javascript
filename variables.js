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
