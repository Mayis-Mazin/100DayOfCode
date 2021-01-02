/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/**
 * I: array 
 * O: first item that occurs an even number of times in an array
 * C: -
 * E: No even-occurrence items
 */

 var evenOccurrence=function(arr){
     //we need to keep track of the number of occurrences of each element in our array, 
     var counter ={},i;

     //build out our counter object
     for (i=0;i<arr.length;i++){
         counter[arr[i]]=!counter[arr[i]]
     } 
     
     //return the first even occurrence 
     for (i=0;i<arr.length;i++){
         if(!counter[arr[i]]) {
             return arr[i]
         } 
    }
    return null;

 }