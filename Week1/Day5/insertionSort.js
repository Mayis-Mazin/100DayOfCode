/**
 * 100 DAY OF Code
 * Day5: Insertion Sort 


  I: Array
  O: Sorted array
  C: -
  E: -
  
  */
 
function insertionSort(array) {
    let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
}

var array=[1,9,5,2]
insertionSort(array);

