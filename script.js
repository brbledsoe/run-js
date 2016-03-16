// var integers = [4, 5, 6, 3, 2, 7, 8];
// var sum = 0;

// for (var i = 0; i < integers.length; i++){

//     sum = integers[i] + sum;

// }
// console.log(sum/integers.length);




// var integers = [4, 6, 3, 2, 7, 8, 2];
// var theEnd = "";

// for (var i = 0; i < integers.length; i++){
//   theEnd += integers[i] + ",";
// }
//  console.log("\"" + theEnd + "\"")











// solution 4
// var numbers = "2345345247678655444444568";
// numbers.charAt(0);
// numbers[0];

// for (var i = 0; i < numbers.length-1; i++){

//    if((numbers.charAt(i) %2===0) && (numbers.charAt(i + 1)%2 === 0)){
//     fin=fin + "-" + numbers.charAt(i + 1);
//    }
//    else{
//     fin = fin + numbers.charAt(i+1);
//     }
// }

// console.log(fin);






// var arr1 =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// var arr1 =[3, 'a', 3];

// function mode(arr1)
// {
//     if(arr1.length == 0)
//       return null;
//     var modeMap = {};
//     var maxEl = arr1[0], maxCount = 1;
//     for(var i = 0; i < arr1.length; i++)
//     {
//       var el = arr1[i];
//       if(modeMap[el] == null)
//         modeMap[el] = 1;
//       else
//         modeMap[el]++;  
//       if(modeMap[el] > maxCount)
//       {
//         maxEl = el;
//         maxCount = modeMap[el];
//       }
//     }
//     return maxEl;
// }

// for(var i = 0; i < arr1.length; i ++){

//   if (){

//   }

// }









// VVV DAY 3 JAVASCRIPT EXCERCISES  VVVV
// V EXCERCISE 1 V
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Note : A prime number (or a prime) is a number greater than 1 that has no positive divisors other than 1 and itself.
// who's only positive divisors (cannot divide by 2) other than one or itself

var excer_1 = function (num){
  
  if ( num === 2){
     
      return num + " is a prime number!";

  } else if ( num % 2 === 0 || num === 1 ){

      return num + " is a NOT prime number!"

  } else {

      return num + " is a prime number!"

  }

}

console.log(excer_1(1));





  // V EXERCISE 2 V
  // Write a JavaScript function that accepts a Array (int) as a parameter and return the avarage of it.



// var integers = [4, 5, 6, 3, 2, 7, 8];



// var exer_2 = function(peram){
//     var sum = 0;

//     for (var i = 0; i < peram.length; i++){
//          sum = peram[i] + sum;
//     }

//     return sum/peram.length;
// }


// console.log(exer_2(integers));



// V EXCERCISE 3 V
// Write a JavaScript function that accepts a Array (int) as a parameter and number and return if the number exists in this Array


// var excer_3 = function(arry, num2ser){

//   for(var i = 0; i < arry.length; i++){

//     if (arry[i] === num2ser) {
//        console.log("The number " + num2ser + " is in the array.");
//      }
//   }
// }


// var integers = [4, 5, 6, 3, 2, 7, 8];
// console.log(excer_3(integers, 8));




// V EXCERCISE 4 V
// Write a JavaScript function that accepts an Array (int) as a parameter and number and prints all the numbers in that array which are smaller than it. and then return the AVG of all of those numbers


// var excer_4 = function (arry, num) {
//     var lower_nums = [];
//     var sum = 0;

//     for (i = 0; i < arry.length; i ++) {

//         if ( arry[i] < num ) {
//             lower_nums.push(arry[i]);
//             console.log(lower_nums);
//         }

//     }

//     for (i = 0; i < lower_nums.length; i ++) {
//       sum += lower_nums[i];
//     }

//     return sum/lower_nums.length; 
// }

// var some_arry = [5, 7, 8, 3, 2, 5, 7];

// var lowAverage = excer_4(some_arry, 7);

// console.log(lowAverage);








