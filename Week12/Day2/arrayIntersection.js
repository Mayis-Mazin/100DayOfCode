// write a function that takes two arrays and returns
// array with their intersection

module.exports = (firstArray, secondArray) => {
    const hash = {};
  
    firstArray.forEach((item) => {
      hash[item] = true;
    });
  
    const intersection = secondArray.filter((item) => hash[item]);
  
    return intersection;
  };