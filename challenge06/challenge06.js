'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
const ls = [12,32,22,45,78,12,50]

const findMax = (arr)=>{
    let max =ls[0];
    for (let i = 0; i < arr.length; i++){if (arr[i] > max) { max = arr[i]; }}
    return max;
}
console.log(findMax(ls));

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
const ls2 = [20, '234', 'car', 41, 20, 'chair']
const sumNums = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){if (typeof arr[i]== typeof sum) { sum = arr[i]+sum; }}
    return sum;
}
console.log(sumNums(ls2));
// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const ls3 = ['C#', 'JS', 'Ruby','Python' ]
const reverseArray = (arr)=>{
    let ls31 =[];
    while(arr.length){
        ls31.push(arr.pop())
    }
    return ls31;
}
console.log(reverseArray(ls3));

module.exports = {findMax , sumNums, reverseArray};