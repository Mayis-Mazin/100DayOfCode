/**
 * 100 Day of Code challenge 
 * Day 8: Quick Sort
 * 
 */
function quickSort (arr){
    if (arr.length<=1) return arr;
    var pivot =arr[Math.floor(arr.length/2)],left=[],right=[]
   for (var i=0;i<arr.length;i++){
    if (i===Math.floor(arr.length/2)) continue;
    if (arr[i]<pivot)left.push(arr[i]);
    else right.push(arr[i])
   }

   var sorted =quickSort(left).concat(pivot,right)
   return sorted;
}