/**
 * 100 DAY OF Code
 * Day6: Selection Sort 



  I: Array
  O: Sorted array
  C: -
  E: -
  
  */function selectionSort(array) { 
    let n = array.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}

selectionSort([5,4,6,2]);
