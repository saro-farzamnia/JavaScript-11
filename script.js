"use strict"
//  map => creat a new Array
// const number=[1,2,3,4,5];

// const newNumbers=[];
// number.forEach(number =>{
//   newNumbers.push(number*2)
// })
// console.group(newNumbers);



// const newNum=number.map((number)=>{
//   return number*2;
// })
// console.log(newNum);

// const newNum=number.map(number => number*2);
// console.log(newNum);


// find true&false find one
// const number=[12,2,4,3,4,5];
// const result=number.find(number =>{
//   const isEqual=number === 4;
//   console.log(isEqual);
//   return isEqual;
// })
// console.log(result);

// const result = number.find((number) => number === 4);
// console.log(result);


// findIndex
// const number=[1,2,4,3,4,5];
// const result = number.findIndex((number) => number === 4);
// console.log(result);


// filter creat a new Array and find all
// const number=[7,5,4,3,4,2,7];
// const result = number.filter(number => number === 4);
// console.log(result);



// reduce (kahandeh)

// const number=[1,2,3,4,5];

// let newNum=0;
// number.forEach(number => newNum +=number);
// console.log(newNum);

// const result = number.reduce((previousValue,currentValue)=>{},0);
// const result2 = number.reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue;
// },0);
// console.log(result2)

// previousValue = acc = accumulator
// currentValue = curr


// evry & some e.g && ||

// const number=[1,2,3,4,"5"];

// const result=number.every((item)=>{
//   const isTrue=typeof item === "number";
//   return isTrue;
// })
// console.log(result)

// const result2=number.some((item)=>{
//   const isTrue=typeof item === "number";
//   return isTrue;
// })
// console.log(result2)


// Challenge 1.Find customers with age>60 and age<10
// Challenge2. Build customers data with title and full name

// let customers = [
//     {
//       id: 1,
//       f_name: "Abby",
//       l_name: "Thomas",
//       gender: "M",
//       married: true,
//       age: 32,
//       expense: 500,
//       purchased: ["Shampoo", "Toys", "Book"],
//     },
//     {
//       id: 2,
//       f_name: "Jerry",
//       l_name: "Tom",
//       gender: "M",
//       married: true,
//       age: 64,
//       expense: 100,
//       purchased: ["Stick", "Blade"],
//     },
//     {
//       id: 3,
//       f_name: "Dianna",
//       l_name: "Cherry",
//       gender: "F",
//       married: true,
//       age: 22,
//       expense: 1500,
//       purchased: ["Lip"]
//       },
//     {
//       id:4,
//       f_name: "Dev",
//       l_name: "Currian",
//       gender: "M",
//       married: true,
//       age: 82,
//       expense: 90,
//       purchased: ["Book"]
//     },
//     {
//       id:5,
//       f_name: "Maria",
//       l_name: "Gomes",
//       gender: "F",
//       married: false,
//       age: 7,
//       expense: 300,
//       purchased: ["Toys"]
//     },
// ];


// 1:filter
// const over60=customers.filter((customers => customers.age >=60));
// console.log(over60);
// const under10=customers.filter((customers => customers.age <=10));
// console.log(under10);


// 2:map
// const customersWithTitle=customers.map((customer)=>{
//   let title=" ";
  // const {f_name,l_name} = customers;

//   if(customer.gender==="M"){
//     title="Mr."
//   }else if(customer.gender==="F" && customer.married){
//     title="Mrs."
//   }else{
//     title="Miss."
//   }
  // customer.customerFullName = `${title} ${f_name} ${l_name}`; 
//   customer.customerFullName = `${title} ${customer.f_name} ${customer} ${customer.l_name}`;
//   return customer;
// })
// console.log(customersWithTitle);