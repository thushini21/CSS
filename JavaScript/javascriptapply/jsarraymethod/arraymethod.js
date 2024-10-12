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

//slice-Returna shallow copy of a portion of an array into a new array

let my_number_array = [1,2,3,4,5,6,7,8,9,10];

let copy1 = my_number_array.slice(2);      //2 weni index ek wenkm nthuwa ithuru tik print wnw
console.log("copy1:" , copy1);                       //[3,4,5,6,7,8,9,10]

let copy2 = my_number_array.slice(2,6);
console.log("copy2:" , copy2);    // 2 index idn 6 weni index ek dakwa print wenn dl hbi 6 weni index ek print wen na
                                 //[3,4,5,6]

let copy3 = my_number_array.slice(-1);   // -1 dakwa print wnw 2
console.log("copy3:" , copy3);

//shallow copy kiynne - inn kenawam refer krnne ntho wdht orinl copy ekk hdgnn ek
let new_my_number_array = my_number_array.slice();
console.log("my_number_array" , my_number_array);
console.log("New_my_number_array" , new_my_number_array);

new_my_number_array[0] = 100;
console.log("my_number_array" , my_number_array);
console.log("New_my_number_array" , new_my_number_array);

//splice      item range ekk remove krnn plwn

let new_array = [1,2,3,4,5,6,7,8,9,10];

// new_array.splice(9);
// console.log("Splice 1: ", new_array);


// new_array.splice(4,3);
// console.log("Splice 2" ,  new_array);   // weni index eke idn 2 k delete krnwa


//new_array.splice(1,2,"Hello");
//console.log(new_array);
//new_array.splice(1,2,"hellow","hiii");
//console.log("Splice 3:", new_array);

//////////////////////////////////////////
let arr1 = [10,40,50,20,70,60,80,30,100];
for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = 0; j < arr1.length - 1 - i; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}
console.log(arr1);

//sort
let sorted_array = arr1.sort();
console.log("sorted array: ",sorted_array);

//riverse krgnnm //
 let arr2 = ["A" ,"B", "C"];
 let reversed_array =arr2.reverse();
 console.log("Reversed array: ",reversed_array);


 ///index of//
let arr3 = ["usa","sl","uae","sl"];
let idx1 = arr3.indexOf("uk");
console.log("uk: ", idx1);

//lastindexof

let idx4 = arr3.lastIndexOf("sl");
console.log("Last SL: ", idx4);

///////////////////////////

//includes

let arr4= [1,2,"hello",true,"hiii"];
//let includesHello = arr4.includes("Hello");
let includesHello = arr4.includes("hello");
console.log("includesHello: ",includesHello);

// ==================  filter ======================//

let arr5 = [5,5,7,8,9,11,12];

let filter_array = arr5.filter(function (item ){
    return item%2==0;
});
console.log("Filtered Array: ", filter_array);

////////////////////////////////////////////////

//map

let arr6 = ["USA","INDIA","JAPAN","SRI LANKA","RUSSIA"];
// for (let i = 0; i<arr6.length; i++);
// console.log(arr6[i]);


arr6.map((item,index) =>{
    console.log(index + " : " +item);
})