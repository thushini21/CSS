// ====array method =====
//
//     push method

let array1 = ["ranil","sajith" ,"namal" , "ranjan"];
console.log(array1);

array1.push("akd");
// add krnawa thw item ekk push ekk
console.log(array1);

// pop method
  array1.pop();    //antima kenaw ain krnwa
  console.log(array1)

//shift
array1.shift();    //plweni elemnt ek ai krnwa
  console.log(array1);

  //unshift
array1.unshift("Ashan");   //array eke issrht aluth ekk add krnwa
console.log(array1);

array1.unshift("Akindu" ,"damith");   //ekk newe dek thunak , dada add krnn pwn
console.log(array1);

let number_array1 = [1,2,3,];
let number_array2= [4,5,6,7,8,9,10];

//concat

let number_array_result = number_array1.concat(number_array2);
console.log("number_array1" , number_array1);
console.log("number_array2" , number_array2);
console.log("number_array_result_" , number_array_result);


number_array_result = number_array2.concat(number_array1);
console.log("number_array_result_2" , number_array_result);

