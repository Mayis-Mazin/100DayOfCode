//find the first most repeated number in the array
function Mode(arr) {
    let mode = 0;
    let obj = {};
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
      let thisNum = arr[i];
      obj[thisNum] === undefined ? (obj[thisNum] = 1) : (obj[thisNum] += 1);
      if (highest < obj[thisNum]) {
        highest = obj[thisNum];
        mode = thisNum;
      }
    }
    return mode;
  }
  console.log(Mode([1, 2, 3, 4, 5, 5, 6, 6, 6, 3]));